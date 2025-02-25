# Diagnostix: AI-driven Medical Diagnostic Assistant & Prescription Matching System


## Problem Statement

Healthcare professionals often struggle with the complexity of diagnosing diseases accurately and efficiently due to the sheer volume and variety of patient data, medical images, and handwritten prescriptions. Traditional workflows can lead to delays, errors, and misinterpretation of crucial information. Additionally, manually matching handwritten prescriptions to existing orders is time-consuming and error-prone.

---

## Solution

Diagnostix is an AI-driven web application designed to empower healthcare professionals. By combining simulated AI modules for image analysis, patient data processing, and symptom evaluation, Diagnostix generates comprehensive diagnostic reports. Moreover, the system automatically matches handwritten prescriptions against existing orders and creates new orders when needed—streamlining workflows, reducing errors, and enhancing overall efficiency.

---

## Features and Benefits

- **Medical Diagnostic Assistant:**  
  - Analyzes uploaded medical images (e.g., X-rays, MRIs) to detect anomalies and highlight areas of interest.
  - Processes patient input (name, age, gender, medical history, symptoms) using rule-based logic and optional ML techniques.
  - Generates diagnostic reports with probability scores, recommendations, and detailed analyses.
  
- **Prescription Matching & Order Creation:**  
  - Upload handwritten prescriptions and use OCR to extract key details (medication names, dosage, patient information).
  - Automatically match the extracted data against existing orders using fuzzy matching algorithms.
  - Create new orders when no match is found and flag ambiguous cases for manual review.
  
- **Intuitive Multi-Page User Interface:**  
  - **Home Page:** Introduction and navigation to various functionalities.
  - **Patient Input Page:** Form-based interface to collect patient details and symptoms.
  - **Medical Image Upload Page:** Secure upload and preview of medical images.
  - **Diagnostic Results Page:** Display of AI-driven diagnostic outcomes with annotated images.
  - **Detailed Diagnosis Report Page:** In-depth diagnostic report with actionable insights.
  - **Prescription Matching Page:** Upload prescription images and view extracted details with order matching results.
  - **Order Confirmation Page:** Final review and confirmation of matched or newly created orders.
  
- **Modern & Responsive Design:**  
  - Ensures a seamless experience on desktops, tablets, and mobile devices.
  
- **Enhanced Workflow Efficiency:**  
  - Reduces manual data entry and error rates while accelerating diagnostic processes.
  
- **Secure Data Handling:**  
  - Simulates secure processing and storage of sensitive patient information and medical images.

---

## Website Flow

1. **User Registration and Login (if applicable):**  
   - Users create an account or log in to access Diagnostix.
   
2. **Home Page ("/"):**  
   - Introduction to Diagnostix with a brief overview and a prominent "Start Diagnosis" button.
   
3. **Patient Input Page ("/patient-input"):**  
   - Collect patient details (name, age, gender, medical history) and symptoms through a responsive form.
   
4. **Medical Image Upload Page ("/upload-images"):**  
   - Upload one or more medical images (e.g., X-rays, MRIs) with preview functionality.
   
5. **Diagnostic Results Page ("/results"):**  
   - View diagnostic analysis including annotated images, summary of findings, and overall diagnosis.
   
6. **Detailed Diagnosis Report Page ("/detailed-report"):**  
   - Access a comprehensive diagnostic report that can be reviewed, printed, or downloaded.
   
7. **Prescription Matching Page ("/prescription"):**  
   - Upload images of handwritten prescriptions for OCR processing and text extraction.
   
8. **Order Confirmation Page ("/order-confirmation"):**  
   - Review and confirm matched or newly generated patient orders based on prescription data.

---

## Tech Stack

- **Frontend:**  
  - HTML5, CSS3, JavaScript  
  - Responsive design frameworks (e.g., Bootstrap or Tailwind CSS)
  
- **Backend:**  
  - Python with Flask for server-side processing
  
- **AI/ML & OCR:**  
  - Simulated AI modules for diagnostic analysis  
  - Tesseract OCR for extracting text from handwritten prescriptions
  
- **Testing:**  
  - pytest for unit testing
  
- **Optional:**  
  - Database integration (e.g., SQLite or MongoDB) for storing patient and order data

---

## Getting Started

This project was developed to run on your personal IDE. Follow the steps below to set up the environment and run Diagnostix locally.

### 1. Clone the Repository
Clone the Diagnostix repository to your local machine:

git clone https://github.com/your-username/diagnostix.git

Then navigate to the project directory:

cd diagnostix
### 2. Create and Activate a Virtual Environment
Create a virtual environment:

python -m venv venv
Activate the virtual environment:

Windows:
venv\Scripts\activate
macOS/Linux:
source venv/bin/activate

### 3. Install Dependencies
Install all required packages:

pip install -r requirements.txt
Available Scripts
python main.py

### Description:
Launches the Flask web server in development mode.

### Usage:
Open [http://localhost:5000](http://localhost:5000) in your browser to access Diagnostix.


### pytest
Description:
Runs the unit tests to ensure all modules (diagnostic analysis, OCR, and order matching) function correctly.

### Usage:
Execute pytest in the terminal from the project root.

### Deployment
For production deployment, configure your server settings (host, port, debug mode) in main.py and consider using a WSGI server (e.g., Gunicorn) to run your Flask app. Ensure all environment variables (such as the Tesseract OCR path, if needed) are set appropriately.
