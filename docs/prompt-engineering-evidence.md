# CloudReady AZ-900

## Prompt-Engineering Evidence

**Hackathon:** Vibe Coding Hackathon — AZ-900 Exam Prep Edition  
**Project:** CloudReady AZ-900  
**Repository:** https://github.com/femi-awonusi/cloudready-az900  
**Live demo:** https://femi-awonusi.github.io/cloudready-az900/

### 1. Prompt-engineering approach

CloudReady AZ-900 was developed through iterative AI-assisted coding. Rather than treating the application as a single generation task, I worked through successive stages: defining functionality, implementing the quiz, verifying behaviour, adding performance tracking, testing existing features, and preparing the deployed application for presentation.

My approach emphasised specific requirements, incremental implementation, observable test results, and refinement based on what worked or needed improvement. AI served as a development assistant; I remained responsible for checking the application and deciding whether to proceed.

### 2. Evidence of purposeful prompting

#### Example A: Interactive quiz implementation

**Prompt evidence status:** Reconstructed summary of the development interaction; not a verbatim quotation.

**Task:** Implement the core quiz experience using JavaScript.

**Prompt objective:** Specify the required question flow, answer feedback, score calculation, progress indicators, results screen, and restart behaviour rather than requesting a generic quiz application.

**AI contribution:** Assistance implementing the interactive quiz logic and connecting the user actions to the resulting interface.

**Verification:** The first question displayed correctly. Answer selection, feedback, navigation, results, and restarting were tested. The recorded outcome was: “everything works.”

**Prompt-engineering lesson:** Explicit functional requirements make AI-generated code easier to test against observable outcomes.

#### Example B: Domain-level performance dashboard

**Prompt evidence status:** Reconstructed summary of the development interaction; not a verbatim quotation.

**Task:** Extend the quiz with a progress dashboard.

**Prompt objective:** Track real quiz attempts, persist history in browser local storage, calculate overall accuracy, show performance across AZ-900 domains, and help learners identify areas for revision.

**AI contribution:** Assistance implementing attempt tracking, domain score calculations, accuracy calculations, and the associated dashboard logic.

**Verification:** The implementation used the three domain labels:

- Cloud Concepts
- Azure Architecture and Services
- Azure Management and Governance

Initial code checks confirmed that `resetDomainScores` was a function and that `calculateAccuracy(4, 6)` returned `67`.

**Prompt-engineering lesson:** Describing the data to track and the intended learning outcome gives AI a more precise implementation target than asking for a dashboard without functional requirements.

#### Example C: Regression testing and controlled Git workflow

**Recorded user prompt:**

“CloudReady AZ-900 Day 2 regression checks: all five existing-feature checks passed. There is no retry/practise control for missed questions. Give me concise Git status, review, commit and push instructions.”

**Task:** Confirm the state of the existing application and prepare a controlled version-control update.

**Prompt-engineering strengths:** The request supplied test status, explicitly identified a missing feature, and limited the requested action to reviewing and committing the existing work.

**Outcome:** The project workflow included Git status and change review, a commit, a push to the remote repository, and verification that the working tree was clean. The missed-question retry/practice control was kept as a known limitation rather than misrepresented as implemented.

**Prompt-engineering lesson:** Stating known limitations and restricting the requested scope reduces ambiguity and supports safer, more disciplined development.

#### Example D: Deployment and release verification

**Prompt evidence status:** Summarised from the recorded deployment workflow; the exact original prompt is not available in the retrieved summary.

**Task:** Publish CloudReady through GitHub Pages and verify the deployed application.

**Prompt objective:** Configure deployment from the `main` branch and root directory, then check the quiz, results, dashboard, saved history, and question bank.

**Outcome:** The user confirmed that the application worked. The live demo link was subsequently verified, and the README was updated with project information and three screenshots.

**Prompt-engineering lesson:** A successful code-generation response is not the final measure of success. Deployment and browser-level verification establish whether the product works in its intended environment.

### 3. Human judgement and quality control

The development process included more than code generation. I checked application behaviour, performed regression tests, verified domain-level calculations, examined responsive layouts, checked for application errors, and used Git to manage changes.

I also tracked features that had not yet been implemented instead of claiming complete functionality. This distinction matters in AI-assisted development: generated code must be tested, and product claims must reflect the actual application.

### 4. Demonstrable outcomes

The AI-assisted workflow produced a working browser-based AZ-900 practice application with:

- A 30-question practice bank.
- Interactive quiz flow and scoring.
- Domain-level performance reporting.
- Question review and attempt-history features.
- A deployed GitHub Pages demo.
- A GitHub repository with a README and three application screenshots.

These outcomes demonstrate iterative prototyping, feature refinement, testing, and delivery. They do not, by themselves, establish the accuracy of every question or prove that every answer includes an adequate explanation; those are separate learning-quality checks.

### 5. What this demonstrates about prompt engineering

The project's strongest evidence is the progression from explicit requirements to implementation, testing, refinement, and deployment. Prompts were used to define functional expectations, isolate tasks, guide implementation, and support verification.

The work illustrates four practical principles:

1. **Specificity:** Describe the required behaviour and constraints.
2. **Decomposition:** Implement a complex application through manageable stages.
3. **Verification:** Test observable outcomes instead of assuming generated code is correct.
4. **Iteration:** Use test results and known limitations to determine the next task.

### 6. Evidence integrity note

This document distinguishes a recorded prompt from a reconstructed summary. Only the regression-testing request in Example C is presented as recorded user wording. The other examples describe development tasks supported by the available project history and must not be represented as verbatim quotations.

For a final evidence appendix, original conversation excerpts and corresponding code changes, test results, or commits can be attached where available.

**Conclusion:** CloudReady AZ-900 demonstrates a practical, iterative use of AI-assisted development to turn a learning need into a working product. The evidence centres on requirements-driven prompting, verification, refinement, and delivery rather than on AI usage alone.
