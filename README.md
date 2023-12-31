<p align="center">
  <a href="https://www.gamiui.com">
    <img src="https://i.pinimg.com/originals/02/61/18/0261188a351ebd989dd394761403da28.jpg" alt="gamiBrain" width="200"  style="border-radius:50%"/>
    <h1 align="center">Dating App</h1>
  </a>
</p>
</br>

# Resume

- This a mobile application where users can find new people and start a conversation whatever you want.

# Setup

- Please run these following commands:

```console
  npm run front:dev
  npm run docker:compose-up
```

# Possible issues

- In case you have docker size issues in your device you can run this following commands to see the memory details and clear it:

```console
  docker system df -v
  docker builder prune -a
```

# Generate our docker builds

- Run these commands:

```console
  npm run docker:build-yt-mixer
  npm run docker:build-transcribe
```

# Generate and push our docker images to ECR

- Setup ecs-cli and gnupg

```console
  npm run aws:deploy-ecr
```

- In case for just login run:

```console
aws ecr-public get-login-password --profile jesus --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws
```

# Create EC2 Instance

- Run these commands:

```console
  npm run aws:create-ec2-instance
```

# Connect EC2 and setup

- Connect to ec2 instance , download gists files and run the shell files to setup:

```console
  chmod 400 ~/.ssh/dating-match-cluster.pem
  ssh -i "~/.ssh/dating-match-cluster.pem" ubuntu@ec2-23-20-87-64.compute-1.amazonaws.com

  curl -O https://gist.githubusercontent.com/Yei-Linux/0c7e5e044563af265086786b7cb5553a/raw/faa7f71c5d9736db662fdfa2d8394a96df353471/ec2-setup.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/89bedf9e27c6cbbfee2311892b8fb49a/raw/89c3bb535de10eeffdefadeb1c8e00320d395014/ec2-docker-install.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/21f3b61fec844ddb9c926c093bdd0231/raw/ad88bbf65f28569099e9e81f1225091ee80ffe33/ec2-caprover-install.sh
  curl -O https://gist.githubusercontent.com/Yei-Linux/1831bb0742755d26977c4723eea579bc/raw/491c048f689490df13cc0feec2a8eea57599d145/ec2-remove-captain.sh
```

# Caprover

- Password: datingapp123


# RDS

- Password: datingapp123

# KeyStore password

- Password: datingapp123

# Deploy to PlayStore

```console
 /usr/libexec/java_home
 cd /Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
 sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 1000
```