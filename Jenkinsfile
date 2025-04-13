pipeline {
  agent any

  tools {
    nodejs "NodeJS_18" // Make sure this tool is configured in Jenkins
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        echo "Installing NPM packages..."
        sh 'npm ci'
      }
    }

    stage('Install Browsers') {
      steps {
        echo "Installing Playwright browsers..."
        sh 'npx playwright install'
      }
    }

    stage('Run Tests') {
      steps {
        echo "Running Playwright Cucumber tests..."
        sh 'npm run test'
      }
    }
  }

  post {
    always {
      echo "Cleaning up..."
    }
  }
}
