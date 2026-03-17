pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/company-payslip.git'
            }
        }

        stage('Build Report') {
            steps {
                echo 'Build successful for Company Pay Slip project'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t company-payslip .'
            }
        }

        stage('Deploy Report') {
            steps {
                echo 'Deploy step completed'
            }
        }
    }
}