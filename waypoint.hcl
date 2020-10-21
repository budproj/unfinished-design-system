project = "design-system"

app "storybook" {
  labels = {
    "service" = "design-system",
    "env" = "production"
  }

  build {
    use "pack" {}
    registry {
      use "aws-ecr" {
        region = "sa-east-1"
        repository = "root"
        tag = "latest"
      }
    }
  }

  deploy {
    use "kubernetes" {
      namespace = "develop"
    }
  }

  release {
    use "kubernetes" {
      namespace = "production"
      port = 6006
    }
  }
}
