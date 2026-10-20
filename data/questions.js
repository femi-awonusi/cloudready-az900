
"use strict";

// CloudReady AZ-900 original practice question bank.
// correctAnswer is the zero-based index of the correct option.
// These questions are for learning, not official exam questions.

window.CLOUDREADY_QUESTIONS = [
    {
        id: "CC001",
        domain: "Cloud Concepts",
        topic: "Cloud computing",
        difficulty: "Easy",
        question: "What is cloud computing?",
        options: [
            "Using computing services delivered over a network on demand",
            "Storing every file only on a personal computer",
            "Building a physical data centre for every application",
            "Using software without any computing infrastructure"
        ],
        correctAnswer: 0,
        explanation:
            "Cloud computing provides computing resources and services over a network, typically with on-demand access and usage-based pricing.",
        optionExplanations: [
            "Correct. Cloud services can provide computing, storage, networking and other resources on demand.",
            "Incorrect. Cloud computing is not limited to files stored on personal computers.",
            "Incorrect. Cloud users do not necessarily need to build or operate their own data centres.",
            "Incorrect. Cloud applications still rely on computing infrastructure, even when users do not manage it directly."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC002",
        domain: "Cloud Concepts",
        topic: "Cloud benefits",
        difficulty: "Easy",
        question: "A business needs extra computing capacity during a busy sales period and less capacity afterward. Which cloud benefit best addresses this need?",
        options: [
            "High availability",
            "Elasticity",
            "Physical access to servers",
            "Fixed capacity"
        ],
        correctAnswer: 1,
        explanation:
            "Elasticity allows resources to expand or contract as demand changes.",
        optionExplanations: [
            "Incorrect. High availability focuses on keeping services accessible.",
            "Correct. Elasticity helps match resource capacity to changing workloads.",
            "Incorrect. Physical access to servers is not the benefit described.",
            "Incorrect. Fixed capacity does not readily adjust to changing demand."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "AS001",
        domain: "Azure Architecture and Services",
        topic: "Azure regions",
        difficulty: "Easy",
        question: "What is an Azure region?",
        options: [
            "A billing document for a subscription",
            "A type of user account",
            "A geographic area containing one or more Azure datacentres connected through a network",
            "A tool used only to write application code"
        ],
        correctAnswer: 2,
        explanation:
            "An Azure region is a geographic area containing Azure datacentres. Available services and features can vary by region.",
        optionExplanations: [
            "Incorrect. A billing document records charges; it is not a geographic deployment area.",
            "Incorrect. User accounts manage identity and access, not Azure geography.",
            "Correct. Azure regions group datacentres within a geographic area.",
            "Incorrect. An Azure region is infrastructure geography, not a coding tool."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "AS002",
        domain: "Azure Architecture and Services",
        topic: "Azure compute",
        difficulty: "Easy",
        question: "A team needs control over the operating system of a virtual machine in Azure. Which service is the most suitable choice?",
        options: [
            "Azure Cost Management",
            "Azure Virtual Machines",
            "Microsoft Entra ID",
            "Azure Advisor"
        ],
        correctAnswer: 1,
        explanation:
            "Azure Virtual Machines provide virtualised computing resources and allow users to manage the guest operating system.",
        optionExplanations: [
            "Incorrect. Azure Cost Management helps analyse and manage cloud spending.",
            "Correct. Virtual machines provide control over the guest operating system and installed software.",
            "Incorrect. Microsoft Entra ID provides identity and access management capabilities.",
            "Incorrect. Azure Advisor offers recommendations to help optimise Azure resources."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "MG001",
        domain: "Azure Management and Governance",
        topic: "Cost management",
        difficulty: "Easy",
        question: "Which Azure service helps a team analyse its cloud spending and create budgets?",
        options: [
            "Azure Cost Management",
            "Azure Virtual Network",
            "Azure DNS",
            "Azure Virtual Machines"
        ],
        correctAnswer: 0,
        explanation:
            "Azure Cost Management provides tools for analysing costs, monitoring budgets and understanding spending patterns.",
        optionExplanations: [
            "Correct. Cost Management helps users analyse spending and manage budgets.",
            "Incorrect. Azure Virtual Network provides private networking capabilities.",
            "Incorrect. Azure DNS hosts and resolves domain names.",
            "Incorrect. Azure Virtual Machines provide compute resources, not dedicated cost-analysis functionality."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "MG002",
        domain: "Azure Management and Governance",
        topic: "Governance",
        difficulty: "Easy",
        question: "An organisation wants to enforce rules about which Azure resource types can be deployed. Which service can help?",
        options: [
            "Azure Monitor",
            "Azure Policy",
            "Azure Blob Storage",
            "Azure Load Balancer"
        ],
        correctAnswer: 1,
        explanation:
            "Azure Policy helps organisations create, assign and manage rules for Azure resources to support compliance with organisational standards.",
        optionExplanations: [
            "Incorrect. Azure Monitor collects and analyses monitoring data.",
            "Correct. Azure Policy can audit or enforce rules governing resource configurations and permitted resource types.",
            "Incorrect. Azure Blob Storage stores unstructured object data.",
            "Incorrect. Azure Load Balancer distributes network traffic across backend resources."
        ],
        sourceUrl:
            "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    }
];
