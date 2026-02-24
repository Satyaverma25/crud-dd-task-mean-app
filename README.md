# DevOps Assignment

This project demonstrates the complete DevOps lifecycle for a full-stack
MEAN (MongoDB, Express, Angular, Node.js) application.

The application is containerized using Docker, deployed on AWS EC2 using
Docker Compose, configured with Nginx as a reverse proxy, and automated
using a CI/CD pipeline with GitHub Actions.

---

## Tech Stack Used

- Frontend: Angular (served via Nginx)
- Backend: Node.js & Express
- Database: MongoDB
- Containerization: Docker & Docker Compose
- CI/CD: GitHub Actions
- Cloud Platform: AWS EC2 (Ubuntu)
- Reverse Proxy: Nginx

---

## Project Architecture

User → AWS EC2 (Port 80) → Nginx → Angular Frontend  
Backend service runs internally and communicates with MongoDB using
Docker networking.

The entire application is accessible through **port 80 only**, as required.

---

## Repository Setup

1. Created a public GitHub repository for the project
2. Pushed complete frontend, backend, Dockerfiles, and configuration files
3. Maintained a clean and structured repository

---

## Containerization

- Created a Dockerfile for the backend (Node.js + Express)
- Created a multi-stage Dockerfile for the frontend (Angular build + Nginx)
- Used Docker Compose to manage frontend, backend, and MongoDB services

---

## Docker Images

- Built Docker images locally
- Pushed images to Docker Hub:
  - `backend:latest`
  - `frontend:latest`
- Images are automatically built and pushed via CI/CD pipeline

---

## Database Setup

- Used official MongoDB Docker image
- MongoDB runs as a container within Docker Compose
- Backend connects to MongoDB using Docker service networking

---

## Application Access

The application has been successfully deployed on AWS EC2
and is accessible via the EC2 public IP on port 80.

```bash
http://3.109.182.17/

---

## Local Setup Instructions

```bash
git clone <repository-url>
cd crud-dd-task-mean-app
docker-compose up -d
