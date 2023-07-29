resource "aws_s3_bucket" "frontend_survey" {
  bucket = var.s3_survey_bucket

  tags = {
    Name = "Codedang"
  }
}

resource "aws_s3_object" "frontend_survey" {
  for_each = fileset("../../frontend/survey/dist", "**")

  bucket       = aws_s3_bucket.frontend_survey.id
  key          = each.value
  source       = "../../frontend/survey/dist/${each.value}"
  content_type = lookup(jsondecode(file("${path.module}/mime.json")), regex("\\.[^.]+$", each.key), null)

  etag = filemd5("../../frontend/survey/dist/${each.value}")
}

resource "aws_s3_bucket_website_configuration" "frontend_survey" {
  bucket = aws_s3_bucket.frontend_survey.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_iam_policy_document" "cloudfront_s3" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.frontend_survey.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.main.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "frontend_survey" {
  bucket = aws_s3_bucket.frontend_survey.id
  policy = data.aws_iam_policy_document.cloudfront_s3.json
}