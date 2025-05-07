# Boredom Breaker 🎯

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Boredom%20Breaker)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://boredom-breaker-YOUR_AZURE_URL)

This repository contains the source code for **Boredom Breaker**, an engaging web app that fetches activity suggestions using the **Bored API**. Users can receive random suggestions or filter activities by type and participants. The project focuses on working with **RESTful APIs**, **query parameters**, and **server-side API requests** using **Axios**, while also incorporating modern, responsive front-end design.

---

## 🖥️ Live Website

You can access the live version of Boredom Breaker here:  
👉 **[Boredom Breaker](https://boredom-breaker-YOUR_AZURE_URL)** (Hosted on Microsoft Azure)

Link to **[Azure DevOps Project](https://dev.azure.com/Junaid-Arif/Boredom%20Breaker)**

---

## 🎯 Purpose

**Boredom Breaker** was built as part of my learning journey to deepen my understanding of:

- **RESTful API requests** from the server side.
- **Structuring GET requests** with **path and query parameters**.
- Using **Axios** to make API calls from the server.
- Parsing and handling **JSON data**.
- Dynamically rendering data with **EJS**.
- Building responsive front-end layouts using **CSS**.
- Deploying apps with **Azure App Service** and managing **CI/CD** via **Azure DevOps**.

---

## 🛠️ Features

- **Random Activity Suggestions**: Fetches a random activity when the page loads.
- **Custom Activity Filtering**: Users can filter activities by type and number of participants.
- **Server-Side API Requests**: Uses Axios to make server-side GET requests to the Bored API.
- **Error Handling**: Displays custom error messages if no matching activities are found.
- **Responsive Design**: Clean, modern UI that adapts across desktop and mobile devices.
- **Dynamic Footer**: Displays the current year and author credit.

---

## 💻 Technologies Used

- **Node.js**: Server-side runtime.
- **Express**: Web application framework.
- **EJS**: Template engine for dynamic HTML rendering.
- **Axios**: For making RESTful API requests.
- **Body-Parser**: Middleware for parsing form data.
- **HTML5 / CSS3**: Front-end structure and styling.
- **Microsoft Azure App Service**: Hosting platform.
- **Azure DevOps**: For CI/CD and code management.
- **GitHub**: Source control and collaboration.

---

## 🧩 What I Learned

- **Making RESTful API requests** from the server.
- Structuring **path and query parameters** in API calls.
- Using **Axios** to handle API responses and errors.
- Rendering data dynamically with **EJS** templates.
- Building **responsive layouts** with CSS grid and flexbox.
- Implementing **Azure DevOps CI/CD pipelines**.
- Deploying and managing apps with **Azure App Service**.

---

## 🚀 Deployment & Workflow

The **Boredom Breaker** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

The **Boredom Breaker** app is hosted on **Microsoft Azure App Service** with the code managed across **GitHub** and **Azure DevOps**.

### 🛠 Deployment Setup (Steps I Took)

1. **Created Azure App Service**

   - Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Boredom-Breaker`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   - Created a project called _Boredom Breaker_ in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   - Used the following to connect local code to Azure DevOps:
     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Boredom%20Breaker/_git/Boredom%20Breaker
     ```

5. **Push to Both Remotes**

   - Pushed the same codebase to both GitHub (`origin`) and Azure DevOps (`azure`):
     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   - Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port Configuration**
   - The app already supports dynamic ports:
     ```javascript
     const port = process.env.PORT || 3000;
     ```

---

### 🔥 Deployment Workflow (Current)

Whenever you update code:

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Pushes to GitHub
git push azure main    # Pushes to Azure DevOps and triggers deployment
🤝 Contribution
While this project is primarily for learning and portfolio purposes, feel free to fork the repository and submit a pull request if you'd like to contribute ideas for new features or improvements!

📄 License
This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
```
