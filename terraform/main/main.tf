terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.9.0"
    }
  }

  backend "s3" {
    bucket         = "royals-tf-state"
    key            = "terraform/terraform.tfstate"
    region         = "ap-northeast-2"
    encrypt        = true
    dynamodb_table = "royals-tf-state-lock"
  }
}

module "infra" {
  source = "../modules"
}