pipeline {
    agent none

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials') // Credenciales para Docker Hub
        DOCKER_REPO = 'fercdevv/jenkins-node'                      // Repositorio en Docker Hub
    }

    stages {
        stage('Instalar dependencias...') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Ejecutar tests...') {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }
            steps {
                echo 'Ejecutando pruebas...'
                sh 'npm run test'
            }
        }

        stage('Construir y pushear imagen a Docker Hub') {
            when {
                branch 'develop'
            }

            agent {
                docker {
                    image 'docker:latest'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }

            steps {
                script {
                    echo 'Construyendo y publicando imagen...'
                    sh '''
                    echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                    docker build -t $DOCKER_REPO:latest .
                    docker push $DOCKER_REPO:latest
                    '''
                }
            }
        }
    }
}
