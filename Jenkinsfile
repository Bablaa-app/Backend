pipeline {
    agent any

    environment {
        PROJECT_DIR = '/var/www/node/backend'
        PM2_ID = '1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Pull Changes') {
            steps {
                dir(PROJECT_DIR) {
                    sh 'git pull origin main'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir(PROJECT_DIR) {
                    sh 'npm i --legacy-peer-deps'
                }
            }
        }

        // stage('Build Project') {
        //     steps {
        //         dir(PROJECT_DIR) {
        //              sh 'npm run build'
        //         }
        //     }
        // }

        stage('Deploy') {
            steps {
                dir(PROJECT_DIR) {
                    sh "pm2 reload ${PM2_ID}"
                }
            }
        }
    }
}
