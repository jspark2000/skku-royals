resource "aws_launch_configuration" "main" {
  name_prefix   = "staff-"
  image_id      = "ami-abc12345"
  instance_type = "t4g.small"
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "main" {
  launch_configuration = aws_launch_configuration.main.name
  min_size             = 1
  max_size             = 2
  desired_capacity     = 2
  availability_zones   = ["ap-northeast-2a", "ap-northeast-2b"]

  target_group_arns    = [aws_lb_target_group.example.arn]

  tag {
    key                 = "royals-staff-asg"
    value               = "royals-staff-asg-instance"
    propagate_at_launch = true
  }
}

resource "aws_lb" "main" {
  name               = "main-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.main.id]
  subnets            = [aws_subnet.main.id]
}

resource "aws_lb_target_group" "main" {
  name     = "main-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
}

resource "aws_lb_listener" "main" {
  load_balancer_arn = aws_lb.main.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.main.arn
  }
}