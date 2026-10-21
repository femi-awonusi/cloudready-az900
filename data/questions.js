
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
    },
        {
        id: "CC003",
        domain: "Cloud Concepts",
        topic: "Cloud models",
        difficulty: "Easy",
        question: "Which cloud model combines on-premises infrastructure with public cloud services?",
        options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"],
        correctAnswer: 2,
        explanation: "A hybrid cloud combines private infrastructure with public cloud services.",
        optionExplanations: [
            "Public cloud services are provided over shared cloud infrastructure.",
            "Private cloud infrastructure is dedicated to one organisation.",
            "Correct. Hybrid cloud combines private and public cloud environments.",
            "Community cloud is shared by organisations with common requirements."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC004",
        domain: "Cloud Concepts",
        topic: "Consumption-based model",
        difficulty: "Medium",
        question: "What is a key characteristic of the consumption-based cloud model?",
        options: [
            "Customers always pay a fixed annual fee",
            "Customers pay according to the resources they consume",
            "All services must be purchased permanently",
            "Customers must maintain their own datacentres"
        ],
        correctAnswer: 1,
        explanation: "Consumption-based pricing ties costs to the services and resources used.",
        optionExplanations: [
            "Fixed annual fees are not required for every cloud service.",
            "Correct. Charges generally reflect measured resource consumption.",
            "Cloud services do not all require permanent purchases.",
            "Cloud customers do not necessarily operate their own datacentres."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC005",
        domain: "Cloud Concepts",
        topic: "Cloud service types",
        difficulty: "Easy",
        question: "Which cloud service model provides ready-to-use software over the internet?",
        options: ["IaaS", "PaaS", "SaaS", "On-premises computing"],
        correctAnswer: 2,
        explanation: "Software as a Service provides applications that customers use without managing the underlying infrastructure.",
        optionExplanations: [
            "IaaS provides infrastructure resources.",
            "PaaS provides a platform for building and running applications.",
            "Correct. SaaS provides ready-to-use software applications.",
            "On-premises computing runs on infrastructure managed locally."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC006",
        domain: "Cloud Concepts",
        topic: "Shared responsibility",
        difficulty: "Medium",
        question: "In a typical cloud service, who is responsible for securing the physical datacentre?",
        options: [
            "The cloud customer only",
            "The cloud provider",
            "Every internet user",
            "The customer's application developer only"
        ],
        correctAnswer: 1,
        explanation: "The cloud provider is responsible for the physical security of its datacentres.",
        optionExplanations: [
            "Customers generally do not control the provider's physical facilities.",
            "Correct. Physical datacentre security is the provider's responsibility.",
            "Internet users do not manage cloud datacentre security.",
            "Application developers do not independently secure the provider's physical facilities."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC007",
        domain: "Cloud Concepts",
        topic: "Scalability",
        difficulty: "Medium",
        question: "An application needs additional computing capacity as demand increases. Which cloud benefit addresses this need?",
        options: ["Scalability", "Data sovereignty", "Compliance auditing", "Resource locking"],
        correctAnswer: 0,
        explanation: "Scalability allows resources to increase or decrease to meet demand.",
        optionExplanations: [
            "Correct. Scalability accommodates changing workloads.",
            "Data sovereignty concerns the jurisdiction governing data.",
            "Compliance auditing evaluates adherence to requirements.",
            "Resource locks help prevent certain resource changes or deletions."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },
    {
        id: "CC008",
        domain: "Cloud Concepts",
        topic: "Serverless computing",
        difficulty: "Hard",
        question: "A developer wants code to run in response to events without managing the underlying servers. Which approach is most suitable?",
        options: [
            "Traditional on-premises servers",
            "Azure Functions",
            "A manually maintained virtual machine",
            "A physical file server"
        ],
        correctAnswer: 1,
        explanation: "Azure Functions supports event-driven serverless execution without requiring the developer to manage the underlying servers.",
        optionExplanations: [
            "Traditional servers require infrastructure management.",
            "Correct. Azure Functions is an event-driven serverless compute service.",
            "A manually maintained VM requires server administration.",
            "A physical file server is not an event-driven serverless compute service."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
    },
    {
        id: "CC009",
        domain: "Cloud Concepts",
        topic: "Cloud pricing",
        difficulty: "Hard",
        question: "A company wants to estimate Azure service costs before deployment. Which tool should it use?",
        options: [
            "Azure Service Health",
            "Azure Pricing Calculator",
            "Microsoft Entra ID",
            "Azure Resource Graph"
        ],
        correctAnswer: 1,
        explanation: "The Azure Pricing Calculator estimates costs for planned Azure services.",
        optionExplanations: [
            "Service Health reports Azure service issues and planned maintenance.",
            "Correct. The Pricing Calculator helps estimate expected service costs.",
            "Microsoft Entra ID provides identity and access capabilities.",
            "Azure Resource Graph explores resource information across environments."
        ],
        sourceUrl: "https://azure.microsoft.com/en-us/pricing/calculator/"
    },
    {
        id: "CC010",
        domain: "Cloud Concepts",
        topic: "Cloud service types",
        difficulty: "Hard",
        question: "A team wants to deploy its own operating system and applications while avoiding ownership of physical servers. Which service model best fits?",
        options: ["SaaS", "IaaS", "PaaS", "Office productivity software only"],
        correctAnswer: 1,
        explanation: "IaaS provides virtualised infrastructure while allowing customers to manage operating systems and applications.",
        optionExplanations: [
            "SaaS provides ready-to-use applications.",
            "Correct. IaaS offers infrastructure-level control without physical server ownership.",
            "PaaS typically abstracts more infrastructure and operating-system management.",
            "Productivity software alone does not provide the required infrastructure control."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
    },

    {
        id: "AS003",
        domain: "Azure Architecture and Services",
        topic: "Availability zones",
        difficulty: "Easy",
        question: "What do Azure availability zones provide within a supported region?",
        options: [
            "Separate, physically distinct datacentre locations",
            "A replacement for subscriptions",
            "A way to eliminate all application failures",
            "A tool for estimating costs"
        ],
        correctAnswer: 0,
        explanation: "Availability zones use physically separate locations within a region to improve resilience.",
        optionExplanations: [
            "Correct. Availability zones are separated datacentre locations with independent infrastructure.",
            "Subscriptions are separate management and billing boundaries.",
            "Zones improve resilience but cannot eliminate every possible failure.",
            "Cost estimation is handled by pricing tools."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview"
    },
    {
        id: "AS004",
        domain: "Azure Architecture and Services",
        topic: "Resource groups",
        difficulty: "Medium",
        question: "What is the primary purpose of an Azure resource group?",
        options: [
            "To group and manage related Azure resources",
            "To replace Microsoft Entra ID",
            "To provide a physical network cable",
            "To guarantee that resources are in different regions"
        ],
        correctAnswer: 0,
        explanation: "Resource groups organise related resources for management and deployment.",
        optionExplanations: [
            "Correct. Resource groups provide a logical management container for resources.",
            "Microsoft Entra ID provides identity services.",
            "A resource group is a logical construct, not physical networking equipment.",
            "Resources in a group are not automatically distributed across regions."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview"
    },
    {
        id: "AS005",
        domain: "Azure Architecture and Services",
        topic: "Subscriptions and management groups",
        difficulty: "Medium",
        question: "An organisation needs to apply governance across several Azure subscriptions. Which hierarchy level is designed to group subscriptions?",
        options: ["Availability zone", "Management group", "Virtual machine", "Storage container"],
        correctAnswer: 1,
        explanation: "Management groups organise subscriptions and allow governance settings to be applied across them.",
        optionExplanations: [
            "An availability zone supports resilience within a region.",
            "Correct. Management groups provide a hierarchy above subscriptions.",
            "A virtual machine is a compute resource.",
            "A storage container organises objects within blob storage."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/governance/management-groups/overview"
    },
    {
        id: "AS006",
        domain: "Azure Architecture and Services",
        topic: "Virtual networking",
        difficulty: "Easy",
        question: "What is the main purpose of an Azure virtual network?",
        options: [
            "To provide a logically isolated network for Azure resources",
            "To replace all identity services",
            "To calculate subscription costs",
            "To edit documents collaboratively"
        ],
        correctAnswer: 0,
        explanation: "Azure Virtual Network enables private networking and communication between supported resources.",
        optionExplanations: [
            "Correct. A virtual network provides network connectivity and isolation.",
            "Identity services are provided by products such as Microsoft Entra ID.",
            "Cost estimation and analysis use Azure cost-management tools.",
            "Document collaboration is not the purpose of a virtual network."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview"
    },
    {
        id: "AS007",
        domain: "Azure Architecture and Services",
        topic: "Azure DNS",
        difficulty: "Medium",
        question: "Which Azure service hosts DNS domains and resolves domain names using DNS infrastructure?",
        options: ["Azure DNS", "Azure Policy", "Azure Advisor", "Azure Cost Management"],
        correctAnswer: 0,
        explanation: "Azure DNS hosts DNS domains and provides name-resolution capabilities.",
        optionExplanations: [
            "Correct. Azure DNS provides DNS hosting and resolution capabilities.",
            "Azure Policy evaluates resources against organisational rules.",
            "Azure Advisor provides recommendations for improving Azure environments.",
            "Cost Management helps analyse and control cloud spending."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/dns/dns-overview"
    },
    {
        id: "AS008",
        domain: "Azure Architecture and Services",
        topic: "Storage services",
        difficulty: "Easy",
        question: "Which Azure Storage service is best suited to storing large amounts of unstructured object data?",
        options: ["Azure Blob Storage", "Azure DNS", "Azure VPN Gateway", "Azure Policy"],
        correctAnswer: 0,
        explanation: "Azure Blob Storage is designed for large amounts of unstructured object data.",
        optionExplanations: [
            "Correct. Blob Storage stores objects such as documents, images and backups.",
            "Azure DNS handles DNS hosting and resolution.",
            "VPN Gateway provides secure network connectivity.",
            "Azure Policy enforces organisational rules."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction"
    },
    {
        id: "AS009",
        domain: "Azure Architecture and Services",
        topic: "Storage redundancy",
        difficulty: "Hard",
        question: "Which storage redundancy option replicates data synchronously across availability zones in a supported region?",
        options: ["Locally redundant storage (LRS)", "Zone-redundant storage (ZRS)", "A single local disk", "No redundancy"],
        correctAnswer: 1,
        explanation: "Zone-redundant storage replicates data across availability zones within a region.",
        optionExplanations: [
            "LRS keeps replicas within a single physical location.",
            "Correct. ZRS replicates data across multiple availability zones.",
            "A single disk does not provide this redundancy.",
            "No redundancy does not protect against storage failures."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy"
    },
    {
        id: "AS010",
        domain: "Azure Architecture and Services",
        topic: "Azure compute",
        difficulty: "Hard",
        question: "Which Azure compute option is designed to automatically scale the number of identical virtual machine instances?",
        options: ["Azure Virtual Machine Scale Sets", "Azure DNS", "Azure Files", "Azure Policy"],
        correctAnswer: 0,
        explanation: "Virtual Machine Scale Sets manage groups of load-balanced virtual machine instances and support scaling.",
        optionExplanations: [
            "Correct. Scale Sets can increase or decrease the number of VM instances.",
            "Azure DNS provides DNS hosting and resolution.",
            "Azure Files provides managed file shares.",
            "Azure Policy helps enforce resource configuration requirements."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview"
    },

    {
        id: "MG003",
        domain: "Azure Management and Governance",
        topic: "Azure Policy",
        difficulty: "Easy",
        question: "Which Azure service helps enforce organisational rules about resource configurations?",
        options: ["Azure Policy", "Azure DNS", "Azure Functions", "Azure Blob Storage"],
        correctAnswer: 0,
        explanation: "Azure Policy evaluates resources against rules and can audit or enforce compliance.",
        optionExplanations: [
            "Correct. Azure Policy helps enforce organisational standards.",
            "Azure DNS manages DNS domains and resolution.",
            "Azure Functions provides serverless compute.",
            "Blob Storage stores unstructured object data."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/governance/policy/overview"
    },
    {
        id: "MG004",
        domain: "Azure Management and Governance",
        topic: "Resource locks",
        difficulty: "Medium",
        question: "An administrator wants to prevent a critical Azure resource from being accidentally deleted. What should they consider applying?",
        options: ["A resource lock", "A DNS record", "A storage tier", "A pricing estimate"],
        correctAnswer: 0,
        explanation: "A delete lock helps prevent accidental deletion of a resource.",
        optionExplanations: [
            "Correct. A CanNotDelete lock blocks deletion while allowing permitted operations.",
            "A DNS record maps domain names to information such as IP addresses.",
            "A storage tier affects storage pricing and access characteristics.",
            "A pricing estimate does not protect resources from deletion."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources"
    },
    {
        id: "MG005",
        domain: "Azure Management and Governance",
        topic: "Resource tags",
        difficulty: "Medium",
        question: "A finance team wants to identify Azure costs by department. Which feature can help organise resources for cost reporting?",
        options: ["Resource tags", "Availability zones", "Azure DNS", "Virtual machine images"],
        correctAnswer: 0,
        explanation: "Tags attach metadata such as department or project to resources and can support cost analysis.",
        optionExplanations: [
            "Correct. Consistent tags help categorise resource costs.",
            "Availability zones support resilience.",
            "Azure DNS provides DNS services.",
            "VM images provide templates for virtual machines."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources"
    },
    {
        id: "MG006",
        domain: "Azure Management and Governance",
        topic: "Azure Cloud Shell",
        difficulty: "Easy",
        question: "What is Azure Cloud Shell?",
        options: [
            "A browser-accessible shell for managing Azure resources",
            "A physical Azure datacentre",
            "A storage redundancy option",
            "A service that only monitors website traffic"
        ],
        correctAnswer: 0,
        explanation: "Azure Cloud Shell provides a browser-accessible command-line environment with Azure management tools.",
        optionExplanations: [
            "Correct. Cloud Shell supports Azure CLI and Azure PowerShell.",
            "Cloud Shell is a software environment, not a datacentre.",
            "Storage redundancy is a separate Azure Storage feature.",
            "Cloud Shell is a general Azure management environment."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/cloud-shell/overview"
    },
    {
        id: "MG007",
        domain: "Azure Management and Governance",
        topic: "Azure Advisor",
        difficulty: "Medium",
        question: "Which service provides recommendations that can help improve Azure reliability, security, performance and cost?",
        options: ["Azure Advisor", "Azure DNS", "Azure Files", "Azure Virtual Network"],
        correctAnswer: 0,
        explanation: "Azure Advisor analyses deployments and provides recommendations across several optimisation areas.",
        optionExplanations: [
            "Correct. Azure Advisor provides actionable optimisation recommendations.",
            "Azure DNS handles DNS hosting and resolution.",
            "Azure Files provides managed file shares.",
            "Virtual Network provides network connectivity and isolation."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/advisor/advisor-overview"
    },
    {
        id: "MG008",
        domain: "Azure Management and Governance",
        topic: "Azure Service Health",
        difficulty: "Easy",
        question: "Which service provides information about Azure service issues and planned maintenance that may affect your resources?",
        options: ["Azure Service Health", "Azure Policy", "Azure Blob Storage", "Azure Pricing Calculator"],
        correctAnswer: 0,
        explanation: "Azure Service Health provides personalised information about service issues, planned maintenance and health advisories.",
        optionExplanations: [
            "Correct. Service Health reports service events relevant to your Azure environment.",
            "Azure Policy evaluates resources against rules.",
            "Blob Storage stores unstructured object data.",
            "The Pricing Calculator estimates expected costs."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/service-health/overview"
    },
    {
        id: "MG009",
        domain: "Azure Management and Governance",
        topic: "Azure Monitor",
        difficulty: "Hard",
        question: "A team wants to create alerts when collected Azure metrics or logs meet specified conditions. Which service should it use?",
        options: ["Azure Monitor", "Azure Resource Manager locks", "Azure DNS", "Azure Migrate"],
        correctAnswer: 0,
        explanation: "Azure Monitor collects and analyses monitoring data and supports alerts based on configured conditions.",
        optionExplanations: [
            "Correct. Azure Monitor supports metrics, logs and alerting.",
            "Resource locks help protect resources from accidental changes or deletion.",
            "Azure DNS provides DNS hosting and resolution.",
            "Azure Migrate helps assess and migrate workloads."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-monitor/overview"
    },
    {
        id: "MG010",
        domain: "Azure Management and Governance",
        topic: "Infrastructure as code",
        difficulty: "Hard",
        question: "A team wants to deploy Azure resources repeatedly using declarative configuration files. Which approach best meets this requirement?",
        options: [
            "Azure Resource Manager templates",
            "Manually creating every resource in the portal",
            "Using DNS records alone",
            "Applying storage tiers"
        ],
        correctAnswer: 0,
        explanation: "ARM templates describe Azure infrastructure declaratively and support repeatable deployments.",
        optionExplanations: [
            "Correct. ARM templates define resources and their configuration as code.",
            "Manual portal deployment is less repeatable and automated.",
            "DNS records do not define an entire Azure infrastructure deployment.",
            "Storage tiers control storage characteristics, not infrastructure deployment."
        ],
        sourceUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"
    }
];
