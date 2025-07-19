import { useState } from 'react';
import FileExplorer from './components/FileExplorer';
import PermissionEditor from './components/PermissionEditor';
import './styles.css';

function App() {
  const [currentUser, setCurrentUser] = useState('manager');
  const [showPermissionEditor, setShowPermissionEditor] = useState(false);
  const [permissions, setPermissions] = useState({
    employee1: ['Company/Development/Frontend', 'Company/UI_UX'],
    employee2: ['Company/Development/Backend']
  });

  // Expanded file structure
  const fileStructure   = {
    name: "Company",
    type: "folder",
    path: "Company",
    children: [
        {
            name: "Development",
            type: "folder",
            path: "Company/Development",
            children: [
                {
                    name: "Frontend",
                    type: "folder",
                    path: "Company/Development/Frontend",
                    children: [
                        { 
                            name: "src", 
                            type: "folder", 
                            path: "Company/Development/Frontend/src", 
                            children: [
                                { 
                                    name: "components", 
                                    type: "folder", 
                                    path: "Company/Development/Frontend/src/components", 
                                    children: [
                                        { name: "Header.jsx", type: "file", path: "Company/Development/Frontend/src/components/Header.jsx" },
                                        { name: "Footer.jsx", type: "file", path: "Company/Development/Frontend/src/components/Footer.jsx" },
                                        { name: "Dashboard", type: "folder", path: "Company/Development/Frontend/src/components/Dashboard", children: [
                                            { name: "Chart.jsx", type: "file", path: "Company/Development/Frontend/src/components/Dashboard/Chart.jsx" },
                                            { name: "StatsCard.jsx", type: "file", path: "Company/Development/Frontend/src/components/Dashboard/StatsCard.jsx" }
                                        ]}
                                    ]
                                },
                                { 
                                    name: "pages", 
                                    type: "folder", 
                                    path: "Company/Development/Frontend/src/pages", 
                                    children: [
                                        { name: "Home.jsx", type: "file", path: "Company/Development/Frontend/src/pages/Home.jsx" },
                                        { name: "Login.jsx", type: "file", path: "Company/Development/Frontend/src/pages/Login.jsx" },
                                        { name: "Admin", type: "folder", path: "Company/Development/Frontend/src/pages/Admin", children: [
                                            { name: "Users.jsx", type: "file", path: "Company/Development/Frontend/src/pages/Admin/Users.jsx" },
                                            { name: "Settings.jsx", type: "file", path: "Company/Development/Frontend/src/pages/Admin/Settings.jsx" }
                                        ]}
                                    ]
                                },
                                { name: "App.js", type: "file", path: "Company/Development/Frontend/src/App.js" },
                                { name: "index.js", type: "file", path: "Company/Development/Frontend/src/index.js" },
                                { name: "styles.css", type: "file", path: "Company/Development/Frontend/src/styles.css" }
                            ]
                        },
                        { name: "package.json", type: "file", path: "Company/Development/Frontend/package.json" },
                        { name: "README.md", type: "file", path: "Company/Development/Frontend/README.md" },
                        { name: "webpack.config.js", type: "file", path: "Company/Development/Frontend/webpack.config.js" }
                    ]
                },
                {
                    name: "Backend",
                    type: "folder",
                    path: "Company/Development/Backend",
                    children: [
                        { 
                            name: "src", 
                            type: "folder", 
                            path: "Company/Development/Backend/src",
                            children: [
                                { 
                                    name: "controllers", 
                                    type: "folder", 
                                    path: "Company/Development/Backend/src/controllers", 
                                    children: [
                                        { name: "authController.js", type: "file", path: "Company/Development/Backend/src/controllers/authController.js" },
                                        { name: "userController.js", type: "file", path: "Company/Development/Backend/src/controllers/userController.js" },
                                        { name: "dataController.js", type: "file", path: "Company/Development/Backend/src/controllers/dataController.js" }
                                    ]
                                },
                                { 
                                    name: "models", 
                                    type: "folder", 
                                    path: "Company/Development/Backend/src/models", 
                                    children: [
                                        { name: "User.js", type: "file", path: "Company/Development/Backend/src/models/User.js" },
                                        { name: "Product.js", type: "file", path: "Company/Development/Backend/src/models/Product.js" },
                                        { name: "index.js", type: "file", path: "Company/Development/Backend/src/models/index.js" }
                                    ]
                                },
                                { 
                                    name: "routes", 
                                    type: "folder", 
                                    path: "Company/Development/Backend/src/routes", 
                                    children: [
                                        { name: "authRoutes.js", type: "file", path: "Company/Development/Backend/src/routes/authRoutes.js" },
                                        { name: "apiRoutes.js", type: "file", path: "Company/Development/Backend/src/routes/apiRoutes.js" },
                                        { name: "adminRoutes.js", type: "file", path: "Company/Development/Backend/src/routes/adminRoutes.js" }
                                    ]
                                },
                                { name: "server.js", type: "file", path: "Company/Development/Backend/src/server.js" },
                                { name: "config.js", type: "file", path: "Company/Development/Backend/src/config.js" }
                            ]
                        },
                        { name: "package.json", type: "file", path: "Company/Development/Backend/package.json" },
                        { name: "config.json", type: "file", path: "Company/Development/Backend/config.json" },
                        { name: ".env", type: "file", path: "Company/Development/Backend/.env" }
                    ]
                },
                {
                    name: "API_Documentation",
                    type: "folder",
                    path: "Company/Development/API_Documentation",
                    children: [
                        { name: "Endpoints.md", type: "file", path: "Company/Development/API_Documentation/Endpoints.md" },
                        { name: "Swagger.yaml", type: "file", path: "Company/Development/API_Documentation/Swagger.yaml" },
                        { name: "Postman_Collection.json", type: "file", path: "Company/Development/API_Documentation/Postman_Collection.json" }
                    ]
                }
            ]
        },
        {
            name: "QA",
            type: "folder",
            path: "Company/QA",
            children: [
                { 
                    name: "Test_Plans", 
                    type: "folder", 
                    path: "Company/QA/Test_Plans",
                    children: [
                        { 
                            name: "Unit_Tests", 
                            type: "folder", 
                            path: "Company/QA/Test_Plans/Unit_Tests",
                            children: [
                                { name: "authService.test.js", type: "file", path: "Company/QA/Test_Plans/Unit_Tests/authService.test.js" },
                                { name: "userService.test.js", type: "file", path: "Company/QA/Test_Plans/Unit_Tests/userService.test.js" },
                                { name: "coverage_report.html", type: "file", path: "Company/QA/Test_Plans/Unit_Tests/coverage_report.html" }
                            ]
                        },
                        { 
                            name: "Integration_Tests", 
                            type: "folder", 
                            path: "Company/QA/Test_Plans/Integration_Tests",
                            children: [
                                { name: "API_Integration.test.js", type: "file", path: "Company/QA/Test_Plans/Integration_Tests/API_Integration.test.js" },
                                { name: "DB_Integration.test.js", type: "file", path: "Company/QA/Test_Plans/Integration_Tests/DB_Integration.test.js" }
                            ]
                        },
                        { name: "E2E_Test_Plan.docx", type: "file", path: "Company/QA/Test_Plans/E2E_Test_Plan.docx" },
                        { name: "Test_Cases.xlsx", type: "file", path: "Company/QA/Test_Plans/Test_Cases.xlsx" }
                    ]
                },
                { 
                    name: "Bug_Reports", 
                    type: "folder", 
                    path: "Company/QA/Bug_Reports",
                    children: [
                        { 
                            name: "Critical", 
                            type: "folder", 
                            path: "Company/QA/Bug_Reports/Critical",
                            children: [
                                { name: "BUG-101_Auth_Crash.md", type: "file", path: "Company/QA/Bug_Reports/Critical/BUG-101_Auth_Crash.md" },
                                { name: "BUG-102_Data_Loss.md", type: "file", path: "Company/QA/Bug_Reports/Critical/BUG-102_Data_Loss.md" }
                            ]
                        },
                        { 
                            name: "High_Priority", 
                            type: "folder", 
                            path: "Company/QA/Bug_Reports/High_Priority",
                            children: [
                                { name: "BUG-201_UI_Misalignment.md", type: "file", path: "Company/QA/Bug_Reports/High_Priority/BUG-201_UI_Misalignment.md" },
                                { name: "BUG-202_Performance_Issue.md", type: "file", path: "Company/QA/Bug_Reports/High_Priority/BUG-202_Performance_Issue.md" }
                            ]
                        },
                        { name: "Bug_Template.docx", type: "file", path: "Company/QA/Bug_Reports/Bug_Template.docx" },
                        { name: "Bug_Dashboard.pdf", type: "file", path: "Company/QA/Bug_Reports/Bug_Dashboard.pdf" }
                    ]
                },
                { 
                    name: "Automation", 
                    type: "folder", 
                    path: "Company/QA/Automation",
                    children: [
                        { 
                            name: "Selenium_Scripts", 
                            type: "folder", 
                            path: "Company/QA/Automation/Selenium_Scripts",
                            children: [
                                { name: "login_test.py", type: "file", path: "Company/QA/Automation/Selenium_Scripts/login_test.py" },
                                { name: "dashboard_test.py", type: "file", path: "Company/QA/Automation/Selenium_Scripts/dashboard_test.py" },
                                { name: "config.ini", type: "file", path: "Company/QA/Automation/Selenium_Scripts/config.ini" }
                            ]
                        },
                        { 
                            name: "Cypress_Tests", 
                            type: "folder", 
                            path: "Company/QA/Automation/Cypress_Tests",
                            children: [
                                { name: "e2e", type: "folder", path: "Company/QA/Automation/Cypress_Tests/e2e", children: [
                                    { name: "spec.cy.js", type: "file", path: "Company/QA/Automation/Cypress_Tests/e2e/spec.cy.js" }
                                ]},
                                { name: "cypress.config.js", type: "file", path: "Company/QA/Automation/Cypress_Tests/cypress.config.js" }
                            ]
                        },
                        { name: "README.md", type: "file", path: "Company/QA/Automation/README.md" }
                    ]
                },
                { name: "QA_Process.pdf", type: "file", path: "Company/QA/QA_Process.pdf" }
            ]
        },
        {
            name: "UI_UX",
            type: "folder",
            path: "Company/UI_UX",
            children: [
                { 
                    name: "Wireframes", 
                    type: "folder", 
                    path: "Company/UI_UX/Wireframes",
                    children: [
                        { 
                            name: "Mobile", 
                            type: "folder", 
                            path: "Company/UI_UX/Wireframes/Mobile",
                            children: [
                                { name: "Home.png", type: "file", path: "Company/UI_UX/Wireframes/Mobile/Home.png" },
                                { name: "Login.png", type: "file", path: "Company/UI_UX/Wireframes/Mobile/Login.png" },
                                { name: "Dashboard.png", type: "file", path: "Company/UI_UX/Wireframes/Mobile/Dashboard.png" }
                            ]
                        },
                        { 
                            name: "Desktop", 
                            type: "folder", 
                            path: "Company/UI_UX/Wireframes/Desktop",
                            children: [
                                { name: "Home.fig", type: "file", path: "Company/UI_UX/Wireframes/Desktop/Home.fig" },
                                { name: "Admin_Panel.fig", type: "file", path: "Company/UI_UX/Wireframes/Desktop/Admin_Panel.fig" }
                            ]
                        },
                        { 
                            name: "Tablet", 
                            type: "folder", 
                            path: "Company/UI_UX/Wireframes/Tablet",
                            children: [
                                { name: "Home.pdf", type: "file", path: "Company/UI_UX/Wireframes/Tablet/Home.pdf" },
                                { name: "Settings.pdf", type: "file", path: "Company/UI_UX/Wireframes/Tablet/Settings.pdf" }
                            ]
                        },
                        { name: "Wireframe_Guide.pdf", type: "file", path: "Company/UI_UX/Wireframes/Wireframe_Guide.pdf" }
                    ]
                },
                { 
                    name: "Mockups", 
                    type: "folder", 
                    path: "Company/UI_UX/Mockups",
                    children: [
                        { 
                            name: "v1", 
                            type: "folder", 
                            path: "Company/UI_UX/Mockups/v1",
                            children: [
                                { name: "Light_Theme", type: "folder", path: "Company/UI_UX/Mockups/v1/Light_Theme", children: [
                                    { name: "Home.jpg", type: "file", path: "Company/UI_UX/Mockups/v1/Light_Theme/Home.jpg" },
                                    { name: "Dashboard.jpg", type: "file", path: "Company/UI_UX/Mockups/v1/Light_Theme/Dashboard.jpg" }
                                ]},
                                { name: "Feedback.txt", type: "file", path: "Company/UI_UX/Mockups/v1/Feedback.txt" }
                            ]
                        },
                        { 
                            name: "v2", 
                            type: "folder", 
                            path: "Company/UI_UX/Mockups/v2",
                            children: [
                                { name: "Dark_Theme", type: "folder", path: "Company/UI_UX/Mockups/v2/Dark_Theme", children: [
                                    { name: "Home.psd", type: "file", path: "Company/UI_UX/Mockups/v2/Dark_Theme/Home.psd" },
                                    { name: "Admin.psd", type: "file", path: "Company/UI_UX/Mockups/v2/Dark_Theme/Admin.psd" }
                                ]},
                                { name: "Approval.docx", type: "file", path: "Company/UI_UX/Mockups/v2/Approval.docx" }
                            ]
                        },
                        { 
                            name: "Final", 
                            type: "folder", 
                            path: "Company/UI_UX/Mockups/Final",
                            children: [
                                { name: "Final_Designs.sketch", type: "file", path: "Company/UI_UX/Mockups/Final/Final_Designs.sketch" },
                                { name: "Assets", type: "folder", path: "Company/UI_UX/Mockups/Final/Assets", children: [
                                    { name: "Icons.zip", type: "file", path: "Company/UI_UX/Mockups/Final/Assets/Icons.zip" },
                                    { name: "Illustrations.zip", type: "file", path: "Company/UI_UX/Mockups/Final/Assets/Illustrations.zip" }
                                ]}
                            ]
                        },
                        { name: "Version_History.xlsx", type: "file", path: "Company/UI_UX/Mockups/Version_History.xlsx" }
                    ]
                },
                { 
                    name: "Assets", 
                    type: "folder", 
                    path: "Company/UI_UX/Assets",
                    children: [
                        { 
                            name: "Icons", 
                            type: "folder", 
                            path: "Company/UI_UX/Assets/Icons",
                            children: [
                                { name: "SVG", type: "folder", path: "Company/UI_UX/Assets/Icons/SVG", children: [
                                    { name: "user.svg", type: "file", path: "Company/UI_UX/Assets/Icons/SVG/user.svg" },
                                    { name: "settings.svg", type: "file", path: "Company/UI_UX/Assets/Icons/SVG/settings.svg" }
                                ]},
                                { name: "PNG", type: "folder", path: "Company/UI_UX/Assets/Icons/PNG", children: [
                                    { name: "logo_32x32.png", type: "file", path: "Company/UI_UX/Assets/Icons/PNG/logo_32x32.png" },
                                    { name: "logo_64x64.png", type: "file", path: "Company/UI_UX/Assets/Icons/PNG/logo_64x64.png" }
                                ]}
                            ]
                        },
                        { 
                            name: "Images", 
                            type: "folder", 
                            path: "Company/UI_UX/Assets/Images",
                            children: [
                                { name: "hero.jpg", type: "file", path: "Company/UI_UX/Assets/Images/hero.jpg" },
                                { name: "background.png", type: "file", path: "Company/UI_UX/Assets/Images/background.png" },
                                { name: "team.jpg", type: "file", path: "Company/UI_UX/Assets/Images/team.jpg" }
                            ]
                        },
                        { 
                            name: "Fonts", 
                            type: "folder", 
                            path: "Company/UI_UX/Assets/Fonts",
                            children: [
                                { name: "Inter", type: "folder", path: "Company/UI_UX/Assets/Fonts/Inter", children: [
                                    { name: "Inter-Regular.ttf", type: "file", path: "Company/UI_UX/Assets/Fonts/Inter/Inter-Regular.ttf" },
                                    { name: "Inter-Bold.ttf", type: "file", path: "Company/UI_UX/Assets/Fonts/Inter/Inter-Bold.ttf" }
                                ]},
                                { name: "Roboto", type: "folder", path: "Company/UI_UX/Assets/Fonts/Roboto", children: [
                                    { name: "Roboto-Light.ttf", type: "file", path: "Company/UI_UX/Assets/Fonts/Roboto/Roboto-Light.ttf" }
                                ]}
                            ]
                        },
                        { name: "Asset_Library.pdf", type: "file", path: "Company/UI_UX/Assets/Asset_Library.pdf" }
                    ]
                },
                { name: "Style_Guide.pdf", type: "file", path: "Company/UI_UX/Style_Guide.pdf" },
                { name: "Design_System.fig", type: "file", path: "Company/UI_UX/Design_System.fig" }
            ]
        },
        {
            name: "Management",
            type: "folder",
            path: "Company/Management",
            children: [
                { 
                    name: "Project_Plans", 
                    type: "folder", 
                    path: "Company/Management/Project_Plans",
                    children: [
                        { name: "Roadmap.xlsx", type: "file", path: "Company/Management/Project_Plans/Roadmap.xlsx" },
                        { 
                            name: "Timelines", 
                            type: "folder", 
                            path: "Company/Management/Project_Plans/Timelines",
                            children: [
                                { name: "Development_Timeline.gantt", type: "file", path: "Company/Management/Project_Plans/Timelines/Development_Timeline.gantt" },
                                { name: "QA_Timeline.gantt", type: "file", path: "Company/Management/Project_Plans/Timelines/QA_Timeline.gantt" },
                                { name: "Release_Schedule.pdf", type: "file", path: "Company/Management/Project_Plans/Timelines/Release_Schedule.pdf" }
                            ]
                        },
                        { 
                            name: "Resources", 
                            type: "folder", 
                            path: "Company/Management/Project_Plans/Resources",
                            children: [
                                { name: "Team_Allocation.xlsx", type: "file", path: "Company/Management/Project_Plans/Resources/Team_Allocation.xlsx" },
                                { name: "Budget_Allocation.pdf", type: "file", path: "Company/Management/Project_Plans/Resources/Budget_Allocation.pdf" }
                            ]
                        },
                        { name: "Risk_Assessment.docx", type: "file", path: "Company/Management/Project_Plans/Risk_Assessment.docx" }
                    ]
                },
                { 
                    name: "Budgets", 
                    type: "folder", 
                    path: "Company/Management/Budgets",
                    children: [
                        { 
                            name: "2023", 
                            type: "folder", 
                            path: "Company/Management/Budgets/2023",
                            children: [
                                { name: "Q1_Budget.xlsx", type: "file", path: "Company/Management/Budgets/2023/Q1_Budget.xlsx" },
                                { name: "Q2_Budget.xlsx", type: "file", path: "Company/Management/Budgets/2023/Q2_Budget.xlsx" },
                                { name: "Annual_Report.pdf", type: "file", path: "Company/Management/Budgets/2023/Annual_Report.pdf" }
                            ]
                        },
                        { 
                            name: "2024", 
                            type: "folder", 
                            path: "Company/Management/Budgets/2024",
                            children: [
                                { name: "Proposed_Budget.xlsx", type: "file", path: "Company/Management/Budgets/2024/Proposed_Budget.xlsx" },
                                { name: "Approved_Budget.xlsx", type: "file", path: "Company/Management/Budgets/2024/Approved_Budget.xlsx" }
                            ]
                        },
                        { name: "Forecast.xlsx", type: "file", path: "Company/Management/Budgets/Forecast.xlsx" },
                        { name: "Budget_Policy.pdf", type: "file", path: "Company/Management/Budgets/Budget_Policy.pdf" }
                    ]
                },
                { 
                    name: "Reports", 
                    type: "folder", 
                    path: "Company/Management/Reports",
                    children: [
                        { 
                            name: "Weekly", 
                            type: "folder", 
                            path: "Company/Management/Reports/Weekly",
                            children: [
                                { name: "Week_01.docx", type: "file", path: "Company/Management/Reports/Weekly/Week_01.docx" },
                                { name: "Week_02.docx", type: "file", path: "Company/Management/Reports/Weekly/Week_02.docx" },
                                { name: "Week_03.pptx", type: "file", path: "Company/Management/Reports/Weekly/Week_03.pptx" }
                            ]
                        },
                        { 
                            name: "Monthly", 
                            type: "folder", 
                            path: "Company/Management/Reports/Monthly",
                            children: [
                                { name: "January.pdf", type: "file", path: "Company/Management/Reports/Monthly/January.pdf" },
                                { name: "February.pdf", type: "file", path: "Company/Management/Reports/Monthly/February.pdf" },
                                { name: "March.pdf", type: "file", path: "Company/Management/Reports/Monthly/March.pdf" }
                            ]
                        },
                        { 
                            name: "Quarterly", 
                            type: "folder", 
                            path: "Company/Management/Reports/Quarterly",
                            children: [
                                { name: "Q1_Report.pdf", type: "file", path: "Company/Management/Reports/Quarterly/Q1_Report.pdf" },
                                { name: "Q2_Report.pdf", type: "file", path: "Company/Management/Reports/Quarterly/Q2_Report.pdf" },
                                { name: "Executive_Summary.docx", type: "file", path: "Company/Management/Reports/Quarterly/Executive_Summary.docx" }
                            ]
                        },
                        { name: "Report_Template.dotx", type: "file", path: "Company/Management/Reports/Report_Template.dotx" }
                    ]
                },
                { 
                    name: "HR", 
                    type: "folder", 
                    path: "Company/Management/HR",
                    children: [
                        { 
                            name: "Contracts", 
                            type: "folder", 
                            path: "Company/Management/HR/Contracts",
                            children: [
                                { name: "Developers", type: "folder", path: "Company/Management/HR/Contracts/Developers", children: [
                                    { name: "John_Doe.pdf", type: "file", path: "Company/Management/HR/Contracts/Developers/John_Doe.pdf" },
                                    { name: "Jane_Smith.pdf", type: "file", path: "Company/Management/HR/Contracts/Developers/Jane_Smith.pdf" }
                                ]},
                                { name: "Designers", type: "folder", path: "Company/Management/HR/Contracts/Designers", children: [
                                    { name: "Alex_Wong.pdf", type: "file", path: "Company/Management/HR/Contracts/Designers/Alex_Wong.pdf" }
                                ]},
                                { name: "Contract_Template.docx", type: "file", path: "Company/Management/HR/Contracts/Contract_Template.docx" }
                            ]
                        },
                        { 
                            name: "Onboarding", 
                            type: "folder", 
                            path: "Company/Management/HR/Onboarding",
                            children: [
                                { name: "Checklist.docx", type: "file", path: "Company/Management/HR/Onboarding/Checklist.docx" },
                                { name: "Materials", type: "folder", path: "Company/Management/HR/Onboarding/Materials", children: [
                                    { name: "Company_Policy.pdf", type: "file", path: "Company/Management/HR/Onboarding/Materials/Company_Policy.pdf" },
                                    { name: "IT_Setup.pdf", type: "file", path: "Company/Management/HR/Onboarding/Materials/IT_Setup.pdf" }
                                ]}
                            ]
                        },
                        { name: "Employee_Directory.xlsx", type: "file", path: "Company/Management/HR/Employee_Directory.xlsx" }
                    ]
                }
            ]
        },
        {
            name: "Operations",
            type: "folder",
            path: "Company/Operations",
            children: [
                { 
                    name: "DevOps", 
                    type: "folder", 
                    path: "Company/Operations/DevOps",
                    children: [
                        { 
                            name: "CI_CD", 
                            type: "folder", 
                            path: "Company/Operations/DevOps/CI_CD",
                            children: [
                                { name: "Jenkinsfile", type: "file", path: "Company/Operations/DevOps/CI_CD/Jenkinsfile" },
                                { name: "github", type: "folder", path: "Company/Operations/DevOps/CI_CD/github", children: [
                                    { name: "workflows", type: "folder", path: "Company/Operations/DevOps/CI_CD/github/workflows", children: [
                                        { name: "deploy.yml", type: "file", path: "Company/Operations/DevOps/CI_CD/github/workflows/deploy.yml" },
                                        { name: "test.yml", type: "file", path: "Company/Operations/DevOps/CI_CD/github/workflows/test.yml" }
                                    ]}
                                ]}
                            ]
                        },
                        { 
                            name: "Dockerfiles", 
                            type: "folder", 
                            path: "Company/Operations/DevOps/Dockerfiles",
                            children: [
                                { name: "frontend.Dockerfile", type: "file", path: "Company/Operations/DevOps/Dockerfiles/frontend.Dockerfile" },
                                { name: "backend.Dockerfile", type: "file", path: "Company/Operations/DevOps/Dockerfiles/backend.Dockerfile" },
                                { name: "database.Dockerfile", type: "file", path: "Company/Operations/DevOps/Dockerfiles/database.Dockerfile" }
                            ]
                        },
                        { 
                            name: "Kubernetes", 
                            type: "folder", 
                            path: "Company/Operations/DevOps/Kubernetes",
                            children: [
                                { name: "deployment.yaml", type: "file", path: "Company/Operations/DevOps/Kubernetes/deployment.yaml" },
                                { name: "service.yaml", type: "file", path: "Company/Operations/DevOps/Kubernetes/service.yaml" },
                                { name: "ingress.yaml", type: "file", path: "Company/Operations/DevOps/Kubernetes/ingress.yaml" }
                            ]
                        },
                        { name: "Infrastructure_Guide.md", type: "file", path: "Company/Operations/DevOps/Infrastructure_Guide.md" }
                    ]
                },
                { 
                    name: "Infrastructure", 
                    type: "folder", 
                    path: "Company/Operations/Infrastructure",
                    children: [
                        { 
                            name: "AWS", 
                            type: "folder", 
                            path: "Company/Operations/Infrastructure/AWS",
                            children: [
                                { name: "terraform", type: "folder", path: "Company/Operations/Infrastructure/AWS/terraform", children: [
                                    { name: "main.tf", type: "file", path: "Company/Operations/Infrastructure/AWS/terraform/main.tf" },
                                    { name: "variables.tf", type: "file", path: "Company/Operations/Infrastructure/AWS/terraform/variables.tf" }
                                ]},
                                { name: "architecture.pdf", type: "file", path: "Company/Operations/Infrastructure/AWS/architecture.pdf" }
                            ]
                        },
                        { 
                            name: "Azure", 
                            type: "folder", 
                            path: "Company/Operations/Infrastructure/Azure",
                            children: [
                                { name: "arm_templates", type: "folder", path: "Company/Operations/Infrastructure/Azure/arm_templates", children: [
                                    { name: "webapp.json", type: "file", path: "Company/Operations/Infrastructure/Azure/arm_templates/webapp.json" }
                                ]}
                            ]
                        },
                        { 
                            name: "OnPrem", 
                            type: "folder", 
                            path: "Company/Operations/Infrastructure/OnPrem",
                            children: [
                                { name: "server_configs", type: "folder", path: "Company/Operations/Infrastructure/OnPrem/server_configs", children: [
                                    { name: "nginx.conf", type: "file", path: "Company/Operations/Infrastructure/OnPrem/server_configs/nginx.conf" },
                                    { name: "redis.conf", type: "file", path: "Company/Operations/Infrastructure/OnPrem/server_configs/redis.conf" }
                                ]}
                            ]
                        },
                        { name: "Backup_Policy.pdf", type: "file", path: "Company/Operations/Infrastructure/Backup_Policy.pdf" }
                    ]
                },
                { 
                    name: "Monitoring", 
                    type: "folder", 
                    path: "Company/Operations/Monitoring",
                    children: [
                        { 
                            name: "Logs", 
                            type: "folder", 
                            path: "Company/Operations/Monitoring/Logs",
                            children: [
                                { name: "Application", type: "folder", path: "Company/Operations/Monitoring/Logs/Application", children: [
                                    { name: "app_2023-01-01.log", type: "file", path: "Company/Operations/Monitoring/Logs/Application/app_2023-01-01.log" }
                                ]},
                                { name: "Server", type: "folder", path: "Company/Operations/Monitoring/Logs/Server", children: [
                                    { name: "server_2023-01-01.log", type: "file", path: "Company/Operations/Monitoring/Logs/Server/server_2023-01-01.log" }
                                ]},
                                { name: "Log_Rotation.sh", type: "file", path: "Company/Operations/Monitoring/Logs/Log_Rotation.sh" }
                            ]
                        },
                        { 
                            name: "Alerts", 
                            type: "folder", 
                            path: "Company/Operations/Monitoring/Alerts",
                            children: [
                                { name: "alert_rules.yml", type: "file", path: "Company/Operations/Monitoring/Alerts/alert_rules.yml" },
                                { name: "notification_templates", type: "folder", path: "Company/Operations/Monitoring/Alerts/notification_templates", children: [
                                    { name: "email_template.html", type: "file", path: "Company/Operations/Monitoring/Alerts/notification_templates/email_template.html" },
                                    { name: "slack_template.json", type: "file", path: "Company/Operations/Monitoring/Alerts/notification_templates/slack_template.json" }
                                ]}
                            ]
                        },
                        { name: "Monitoring_Setup.md", type: "file", path: "Company/Operations/Monitoring/Monitoring_Setup.md" }
                    ]
                }
            ]
        },
        {
            name: "Shared",
            type: "folder",
            path: "Company/Shared",
            children: [
                { 
                    name: "Templates", 
                    type: "folder", 
                    path: "Company/Shared/Templates",
                    children: [
                        { name: "Presentation_Template.pptx", type: "file", path: "Company/Shared/Templates/Presentation_Template.pptx" },
                        { name: "Document_Template.docx", type: "file", path: "Company/Shared/Templates/Document_Template.docx" },
                        { name: "Email_Templates", type: "folder", path: "Company/Shared/Templates/Email_Templates", children: [
                            { name: "Welcome_Email.html", type: "file", path: "Company/Shared/Templates/Email_Templates/Welcome_Email.html" },
                            { name: "Notification_Email.html", type: "file", path: "Company/Shared/Templates/Email_Templates/Notification_Email.html" }
                        ]}
                    ]
                },
                { 
                    name: "Resources", 
                    type: "folder", 
                    path: "Company/Shared/Resources",
                    children: [
                        { name: "Company_Branding.pdf", type: "file", path: "Company/Shared/Resources/Company_Branding.pdf" },
                        { name: "Coding_Standards.md", type: "file", path: "Company/Shared/Resources/Coding_Standards.md" },
                        { name: "Security_Policy.pdf", type: "file", path: "Company/Shared/Resources/Security_Policy.pdf" }
                    ]
                },
                { 
                    name: "Meeting_Minutes", 
                    type: "folder", 
                    path: "Company/Shared/Meeting_Minutes",
                    children: [
                        { name: "2023", type: "folder", path: "Company/Shared/Meeting_Minutes/2023", children: [
                            { name: "January", type: "folder", path: "Company/Shared/Meeting_Minutes/2023/January", children: [
                                { name: "2023-01-10_Standup.docx", type: "file", path: "Company/Shared/Meeting_Minutes/2023/January/2023-01-10_Standup.docx" },
                                { name: "2023-01-17_Retrospective.docx", type: "file", path: "Company/Shared/Meeting_Minutes/2023/January/2023-01-17_Retrospective.docx" }
                            ]}
                        ]},
                        { name: "Meeting_Guidelines.pdf", type: "file", path: "Company/Shared/Meeting_Minutes/Meeting_Guidelines.pdf" }
                    ]
                },
                { name: "Company_Handbook.pdf", type: "file", path: "Company/Shared/Company_Handbook.pdf" }
            ]
        }
    ]
};

  // Tested permission checker
  const hasAccess = (itemPath, user) => {
    if (user === 'manager') return true;
    console.log(itemPath, '\n')
    // Normalize paths by removing "Company/" prefix
    const normalizePath = (path) => path?.replace(/^Company\//, '');
    const itemNormalized = normalizePath(itemPath);
    
    return permissions[user]?.some(permission => {
      const permNormalized = normalizePath(permission);
      
      // Exact match
      if (itemNormalized === permNormalized) return true;
      
      // Item is inside a permitted folder
      if (itemNormalized.startsWith(permNormalized + '/')) return true;
      
      // Permission is inside this item's folder
      if (permNormalized.startsWith(itemNormalized + '/')) return true;
      
      return false;
    });
  };

  const filterStructure = (structure, user) => {
    const filtered = { ...structure };
    
    if (filtered.children) {
      filtered.children = filtered.children
        .filter(item => hasAccess(item.path, user))
        .map(item => ({
          ...item,
          children: item.type === 'folder' ? filterStructure(item, user).children : []
        }));
    }
    
    return filtered;
  };

  // Fixed permission editor handler
  const handlePermissionChange = (employee, newPermissions) => {
    setPermissions(prev => ({
      ...prev,
      [employee]: newPermissions.map(p => p.startsWith('Company/') ? p : `Company/${p}`)
    }));
  };

  return (
    <div className="app">
      <div className="header">
        <h1>File Explorer</h1>
        <div className="controls">
          <div className="user-buttons">
            <button 
              className={currentUser === 'manager' ? 'active' : ''}
              onClick={() => setCurrentUser('manager')}
            >
              Manager
            </button>
            <button 
              className={currentUser === 'employee1' ? 'active' : ''}
              onClick={() => setCurrentUser('employee1')}
            >
              Frontend Dev
            </button>
            <button 
              className={currentUser === 'employee2' ? 'active' : ''}
              onClick={() => setCurrentUser('employee2')}
            >
              Backend
            </button>
          </div>
          {currentUser === 'manager' && (
            <button 
              className="edit-permissions"
              onClick={() => setShowPermissionEditor(true)}
            >
              Edit Permissions
            </button>
          )}
        </div>
      </div>

      <FileExplorer 
        data={filterStructure(fileStructure, currentUser)} 
        user={currentUser} 
      />

      {showPermissionEditor && (
        <PermissionEditor
          permissions={permissions}
          onSave={handlePermissionChange}
          onClose={() => setShowPermissionEditor(false)}
          fileStructure={fileStructure}
        />
      )}
    </div>
  );
}

export default App;