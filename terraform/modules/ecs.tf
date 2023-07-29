# resource "aws_ecs_cluster" "api" {
#   name = "ROYALS-API"
# }

# data "aws_iam_policy_document" "ecs_task_execution_role" {
#   statement {
#     actions = ["sts:AssumeRole"]

#     principals {
#       type        = "Service"
#       identifiers = ["ecs-tasks.amazonaws.com"]
#     }
#   }
# }

# resource "aws_iam_role" "ecs_task_execution_role" {
#   name               = "ROYALS-API-Task-Execution-Role"
#   assume_role_policy = data.aws_iam_policy_document.ecs_task_execution_role.json
# }

# resource "aws_iam_role_policy_attachment" "ecs_task_execution_role" {
#   role       = aws_iam_role.ecs_task_execution_role.name
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
# }

# resource "aws_lb" "client_api" {
#   name               = "ROYALS-API-LB"
#   internal           = false
#   load_balancer_type = "application"
#   security_groups    = [aws_security_group.elb.id]
#   subnets            = [aws_subnet.public_api1.id, aws_subnet.public_api2.id]
#   enable_http2       = true
# }

# resource "aws_lb_listener" "api" {
#   load_balancer_arn = aws_lb.client_api.arn
#   port              = "80"
#   protocol          = "HTTP"

#   default_action {
#     type             = "forward"
#     target_group_arn = aws_lb_target_group.client_api.arn
#   }
# }

# resource "aws_lb_target_group" "client_api" {
#   name        = "ROYALS-API-Target-Group"
#   target_type = "ip"
#   port        = 4000
#   protocol    = "HTTP"
#   vpc_id      = aws_vpc.main.id

#   health_check {
#     interval            = 30
#     path                = "/api"
#     healthy_threshold   = 3
#     unhealthy_threshold = 3
#     matcher             = "200-404"
#   }
# }

# resource "aws_ecs_service" "client_api" {
#   name                              = "ROYALS-API-Service"
#   cluster                           = aws_ecs_cluster.api.id
#   task_definition                   = aws_ecs_task_definition.client_api.arn
#   desired_count                     = 2
#   launch_type                       = "FARGATE"
#   health_check_grace_period_seconds = 300


#   network_configuration {
#     assign_public_ip = true
#     security_groups  = [aws_security_group.client_ecs.id]
#     subnets          = [aws_subnet.public_api1.id, aws_subnet.public_api2.id]
#   }

#   load_balancer {
#     target_group_arn = aws_lb_target_group.client_api.arn
#     container_name   = "ROYALS-API"
#     container_port   = 4000
#   }

#   depends_on = [
#     aws_lb_listener.api
#   ]
# }

# resource "aws_ecs_task_definition" "client_api" {
#   family                   = "ROYALS-API"
#   requires_compatibilities = ["FARGATE"]
#   network_mode             = "awsvpc"
#   cpu                      = 512
#   memory                   = 1024
#   container_definitions = templatefile("${path.module}/tasks/task-definition.tftpl", {
#     task_name         = "ROYALS-API",
#     database_url      = "postgresql://${var.postgres_username}:${random_password.postgres_password.result}@172.31.27.245:5432/royals_database?schema=public",
#     ecr_uri           = var.ecr_client_uri,
#     container_port    = 4000
#     cloudwatch_region = var.region,
#     redis_host        = "1234"
#     redis_port        = var.redis_port,
#     redis_password    = var.redis_password,
#     jwt_secret        = random_password.jwt_secret.result,
#   })
#   execution_role_arn = aws_iam_role.ecs_task_execution_role.arn

#   runtime_platform {
#     operating_system_family = "LINUX"
#   }
# }