resource "aws_cloudfront_origin_access_control" "main" {
  name                              = "ROYALS-SURVEY-S3-OAI"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "main" {
  origin {
    domain_name              = aws_s3_bucket.frontend_survey.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.frontend_survey.id
    origin_access_control_id = aws_cloudfront_origin_access_control.main.id
  }

  enabled             = true
  comment             = "ROYALS Survey Page"
  default_root_object = "index.html"

  aliases = ["survey.skku-royals.football"]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_s3_bucket.frontend_survey.id
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.main.certificate_arn
    ssl_support_method  = "sni-only"
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }
}