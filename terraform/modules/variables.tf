variable "postgres_username" {
  description = "Username for Postgres DB"
  type        = string
  default     = "royals"
}

variable "postgres_password" {
  description = "Password for Postgres DB"
  type        = string
  default     = "password"
  sensitive   = true
}

variable "postgres_port" {
  description = "Port for Postgres DB"
  type        = string
  default     = "5432"
  sensitive   = true
}

variable "redis_port" {
  description = "Port for Redis"
  type        = string
  default     = "6379"
  sensitive   = true
}

variable "redis_password" {
  description = "Password for Redis"
  type        = string
  default     = "abcdefgh01234"
  sensitive   = true
}

variable "availability_zones" {
  description = "List of availability zones"
  type        = list(string)
  default     = ["ap-northeast-2a", "ap-northeast-2b", "ap-northeast-2c", "ap-northeast-2c"]
}
