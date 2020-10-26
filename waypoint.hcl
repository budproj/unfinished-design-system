project = "design-system"

app "storybook" {
  path = "design-system"

  build {
    use "pack" {}
    registry {
      use "aws-ecr" {
        region = "sa-east-1"
        repository = "design-system"
        tag = "latest"
      }
    }
  }

  deploy{
    use "exec"{}
  }
}
