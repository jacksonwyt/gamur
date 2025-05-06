

**Guiding Principles:**

* **SOLID:** We'll aim for:
    * **S**ingle Responsibility Principle (SRP): Each module/class/function does one thing well.
    * **O**pen/Closed Principle (OCP): Modules are open for extension but closed for modification.
    * **L**iskov Substitution Principle (LSP): Subtypes should be substitutable for their base types (important for class hierarchies, e.g., different quest types).
    * **I**nterface Segregation Principle (ISP): Clients shouldn't be forced to depend on interfaces they don't use (relevant for API design and service interactions).
    * **D**ependency Inversion Principle (DIP): Depend on abstractions, not concretions (using interfaces/dependency injection).
* **Modularity:** Break the application into well-defined, loosely coupled modules.
* **Scalability:** Design components anticipating future growth (more users, more features).
* **Testability:** Design for ease of unit, integration, and end-to-end testing.
* **Security & Privacy:** Embed these considerations from the start.

---

**GAMUR MVP - Detailed Technical Outline**

**Phase 0: Foundation & Setup** **[Mostly Complete]**

1.  **Technology Stack Selection:** **[COMPLETE - Choices Made]**
    * **Frontend:** React Native (Chosen for cross-platform MVP efficiency).
        * UI Library: React Native Paper **[Selected & Configured]**
        * Navigation: React Navigation. **[Selected & Configured]**
        * State Management: TBD (Zustand likely). **[Decision Pending]**
    * **Backend:** Node.js w/ NestJS. **[Selected & Initialized]**
    * **Database:** PostgreSQL w/ Prisma. **[Selected & Initialized]**
    * **Cloud Provider:** Supabase (AWS likely). **[Decision Pending]**
    * **AI Component:** Gemini. **[Decision Pending]**

2.  **Project Setup:** **[Mostly Complete]**
    * Initialize Frontend (React Native) and Backend (NestJS) projects. **[COMPLETE]**
    * Set up version control (Git) with branching strategy (e.g., Gitflow). **[COMPLETE - Basic Git Setup, .gitignore updated, build artifacts untracked]**
    * Establish CI/CD pipeline basics (e.g., GitHub Actions, GitLab CI, AWS CodePipeline) for automated builds and tests. **[Not Started]**
    * Set up linters (ESLint/Prettier) and type checking (TypeScript) for code quality. **[COMPLETE - Formatting applied to frontend & backend]**
    * **Initial Jest testing frameworks configured for frontend and backend; initial tests passing.**
    * Containerize backend using Docker for consistent environments. **[COMPLETE - Dockerfile created]**

3.  **Core Backend Infrastructure:** **[Not Started]**
    * **API Gateway:** Entry point for all client requests (e.g., AWS API Gateway). Handles routing, potentially initial auth checks.
    * **Configuration Management:** Securely manage environment variables and secrets (e.g., AWS Secrets Manager, `.env` files with caution).

**Phase 1: User Authentication & Profile** **[IN PROGRESS -> MOSTLY COMPLETE]**

**Frontend Foundation Notes:**
*   Installed and configured React Native Paper UI library. **[COMPLETE]**
*   Installed and configured React Navigation (Native Stack). **[COMPLETE]**
*   Established basic `src` directory structure (`screens`, `navigation`). **[COMPLETE]**

1.  **Backend - Auth Service:** **[IN PROGRESS - Core logic implemented, refresh tokens pending -> COMPLETE (Pending Linter Fixes)]**
    * **Responsibility (SRP):** Handle user registration, login, password management, token generation/validation.
    * **Implementation:**
        * User schema (UserID, email, hashedPassword, socialProviderID, createdAt, updatedAt). **[DEFINED in Prisma - COMPLETE]**
        * Password hashing (bcrypt). **[COMPLETE]**
        * JWT generation (access + refresh tokens). **[COMPLETE - Basic generation implemented]**
        * Endpoints: `/auth/register`, `/auth/login`. **[COMPLETE]**
        * `/auth/refresh-token` endpoint. **[Not Implemented -> COMPLETE]**
        * Social logins (`/auth/login/google`, etc.). **[Not Started]**
        * Secure refresh token storage and rotation logic. **[Not Implemented - TODOs exist -> COMPLETE (Schema Updated, Service Logic Implemented)]**
    * **SOLID:** SRP is clear. OCP via strategy pattern if supporting multiple auth methods. DIP using interfaces for token generation/storage.

2.  **Frontend - Auth Module:** **[COMPLETE - Forgot Password Pending -> COMPLETE (Placeholders Added)]**
    * **Responsibility (SRP):** Display login/signup screens, handle user input, communicate with Auth Service, store tokens securely.
    * **Implementation:**
        * Screens: Login, Sign Up. **[COMPLETE]**
        * Forgot Password Screen/Flow. **[Not Started -> COMPLETE - Placeholder Screen & Navigation]**
        * Secure Token Storage: `expo-secure-store` within `AuthContext`. **[COMPLETE]**
        * API client (`client.ts`) configured and used in Login/SignUp. **[COMPLETE]**
        * State management (`AuthContext`) handles auth status globally. **[COMPLETE]**
        * Conditional navigation (`MainNavigator`) based on auth state. **[COMPLETE]**

3.  **Backend - User Profile Service:** **[PARTIALLY COMPLETE - Endpoints exist, service logic needs correction -> COMPLETE - Verified]**
    * **Responsibility (SRP):** Manage user profile data (username, avatar details, level, XP, badges linked).
    * **Implementation:**
        * Profile schema defined in Prisma. **[COMPLETE]**
        * Basic `ProfileService` and `ProfileController` exist. **[COMPLETE]**
        * Endpoints: `GET /profile/me`, `PUT /profile/me` defined and guarded. **[COMPLETE]**
        * Service methods (`getUserProfile`, `updateUserProfile`) need correction to operate on the `Profile` model instead of `User`. **[Needs Correction -> COMPLETE - Verified]**
        * `UpdateProfileDto` needs definition/refinement for `Profile` fields. **[Needs Implementation -> COMPLETE - Verified (Username Only)]**
    * **SOLID:** SRP.

4.  **Frontend - Profile Module:** **[IN PROGRESS - Display & Navigation Implemented -> COMPLETE (Avatar Placeholder)]**
    * **Responsibility (SRP):** Display profile information, allow editing basic details (username, avatar selection).
    * **Implementation:**
        * Profile Screen (`ProfileScreen.tsx`) implemented with data fetching and display. **[COMPLETE]**
        * Data fetching from `GET /profile/me`. **[COMPLETE]**
        * Display of dynamic profile data (username, level, XP). **[COMPLETE]**
        * Edit Profile navigation implemented (`EditProfileScreen.tsx` placeholder created). **[COMPLETE]**
        * Form implementation and API call (`PUT /profile/me`) for editing. **[Not Started -> COMPLETE - Verified]**
        * Avatar selection/display component. **[Not Started -> COMPLETE - Placeholder Component Created]**
        * API client integration for Profile Service (`GET /profile/me`). **[COMPLETE]**

**Phase 2: Core Tracking Features (Health & Habits)** **[IN PROGRESS - Frontend Placeholders]**

1.  **Backend - Habit Service:** **[Not Started]**
    * **Responsibility (SRP):** Manage habit definitions, track completions, calculate streaks.
    * **Implementation:**
        * Habit Definition Schema (HabitID, UserID [FK], name, description, frequency [daily/weekly], target, createdAt). **[DEFINED in Prisma - COMPLETE]**
        * Habit Log Schema (LogID, HabitID [FK], UserID [FK], completionDate, notes [optional]). **[DEFINED in Prisma - COMPLETE]**
        * Streak calculation logic (runs on completion).
        * Endpoints: `POST /habits`, `GET /habits`, `GET /habits/{id}`, `PUT /habits/{id}`, `DELETE /habits/{id}`, `POST /habits/{id}/log`, `GET /habits/logs`.
    * **SOLID:** SRP. OCP by allowing different habit types/frequencies later without modifying core logging.

2.  **Frontend - Habit Module:** **[IN PROGRESS - Placeholder screens created]**
    * **Responsibility (SRP):** Allow users to create, view, edit, delete habits; mark habits as complete; display streaks.
    * **Implementation:**
        * Habit List Screen. **[CREATED - Placeholder]**
        * Create/Edit Habit Form Screen. **[CREATED - Placeholder]**
        * Habit detail view with progress/log. **[CREATED - Placeholder (`HabitDetailScreen.tsx`)]**
        * Checkmark/completion interaction. **[Needs Implementation]**
        * API client for Habit Service. **[Needs Implementation]**

3.  **Backend - Health Data Service:** **[Not Started]**
    * **Responsibility (SRP):** Store manually entered health data and data synced from external sources.
    * **Implementation:**
        * Manual Health Log Schema (LogID, UserID [FK], date, metricType [mood, sleepHours, sleepQuality], value). **[DEFINED in Prisma - COMPLETE (as HealthLog)]**
        * Synced Health Log Schema (LogID, UserID [FK], date, metricType [steps], value, source [Apple Health/Google Fit]). **[DEFINED in Prisma - COMPLETE (as HealthLog)]**
        * Endpoints: `POST /health/log/manual`, `GET /health/logs`, `POST /health/sync` (Internal endpoint called by integration logic).
        * Service methods to query data for dashboard/AI.
    * **SOLID:** SRP. OCP for adding new metric types.

4.  **Frontend - Health Module:** **[Not Started]**
    * **Responsibility (SRP):** Provide interface for manual health entry; initiate sync with health platforms; display health data.
    * **Implementation:**
        * Manual Entry Forms (Mood slider, Sleep input).
        * Integration Logic:
            * Use native modules/bridges (e.g., `react-native-health`, `react-native-google-fit`) to request permissions and read data (Steps).
            * Handle permissions gracefully.
            * Send fetched data to `POST /health/sync` (or process diffs). *Requires careful handling of data volume and frequency.*
        * API client for Health Data Service.

**Phase 3: Dashboard & Gamification** **[IN PROGRESS - Frontend Placeholder]**

1.  **Backend - Dashboard Service / Aggregation Logic:** **[Not Started]**
    * **Responsibility (SRP):** Aggregate data from Habit, Health, and Profile services for dashboard display.
    * **Implementation:**
        * Does not own data but queries other services.
        * Endpoint: `GET /dashboard?date=YYYY-MM-DD` (returns aggregated snapshot).
        * Endpoint: `GET /dashboard/trends?metric=mood&period=week` (returns data for charts).
    * **SOLID:** SRP. Relies on interfaces (DIP) of other services.

2.  **Frontend - Dashboard Module:** **[IN PROGRESS - Placeholder screen created, layout started]**
    * **Responsibility (SRP):** Fetch and display the aggregated daily snapshot and trends. Allow customization.
    * **Implementation:**
        * Dashboard Screen (`HomeScreen.tsx`). **[CREATED - Placeholder/Basic Layout]**
        * Components for displaying mood, sleep, steps, active habits. **[Needs Implementation]**
        * Charting Library (e.g., `react-native-chart-kit`) integration for trends. **[Needs Implementation]**
        * API client for Dashboard Service. **[Needs Implementation]**
        * Local settings for dashboard customization. **[Needs Implementation]**

3.  **Backend - Gamification Service:** **[Not Started]**
    * **Responsibility (SRP):** Calculate XP, manage levels, award badges based on defined rules and events. Process quest completions.
    * **Implementation:**
        * XP/Level Configuration (e.g., level thresholds).
        * Badge Definition Schema (BadgeID, name, description, criteria [e.g., type: streak, value: 7], icon). **[DEFINED in Prisma - COMPLETE]**
        * User Badge Schema (UserBadgeID, UserID [FK], BadgeID [FK], earnedDate). **[DEFINED in Prisma - COMPLETE]**
        * Quest Definition Schema (QuestID, type [user/ai/map], title, description, criteria [e.g., targetSteps, locationCoords], xpReward, badgeReward [optional]). **[DEFINED in Prisma - COMPLETE]**
        * User Quest Progress Schema (UserQuestID, UserID [FK], QuestID [FK], status [active/complete], progressData, startDate, completionDate [optional]). **[DEFINED in Prisma - COMPLETE]**
        * Event Listener/Handler: Listens for events (e.g., `habit_completed`, `health_data_synced`, `checkin_complete`) and triggers XP/Badge/Quest logic. *Using a message queue (e.g., RabbitMQ, SQS) is ideal for decoupling.* **[Needs Implementation]**
        * Endpoints: `GET /gamification/status` (returns Level, XP, recent badges), `GET /gamification/badges`, `GET /quests`, `POST /quests` (user-defined), `POST /quests/{id}/progress`. Potentially internal endpoints for AI suggestions.
    * **SOLID:** SRP. OCP via strategy/rule pattern for adding new XP/Badge/Quest rules. LSP if different Quest types share common behaviors.

4.  **Frontend - Gamification Elements:** **[Not Started]**
    * **Responsibility (SRP):** Display XP progress, level, earned badges, active quests. Integrate map for location quests.
    * **Implementation:**
        * XP Bar component (reusable).
        * Badge Gallery screen/component.
        * Quest List screen.
        * Quest Detail screen.
        * Map Integration (`react-native-maps`) for displaying quest locations and handling check-ins (requires location permissions).
        * API client for Gamification Service.

**Phase 4: AI Companion & Settings** **[Not Started]**

1.  **Backend - AI Service / Logic:**
    * **Responsibility (SRP):** Generate insights and micro-quest suggestions based on user data.
    * **Implementation (MVP - Rule-Based):**
        * Scheduled Job (e.g., daily cron): Queries Health/Habit data via internal APIs/direct DB access (read-only replicas preferred).
        * Rule Engine: Simple rules (e.g., `IF mood_low AND sleep_low THEN suggest "Prioritize sleep"`).
        * Persistence: Store generated insights/suggestions (AIOutput Schema: OutputID, UserID [FK], type [insight/suggestion], text, createdAt, seenByUser). **[DEFINED in Prisma - COMPLETE]**
        * Micro-Quest Generation: Create Quest definitions via Gamification Service API based on rules (e.g., `IF steps_low_yesterday THEN create_quest "Walk 1 mile"`).
        * Endpoint: `GET /ai/insights` (returns unseen insights/suggestions).
    * **SOLID:** SRP. OCP for adding new rules/insights. DIP dependence on abstracted data access.

2.  **Frontend - AI Display:**
    * **Responsibility (SRP):** Display AI insights/suggestions to the user.
    * **Implementation:**
        * Component on Dashboard or dedicated section.
        * Fetch insights from AI Service endpoint.
        * Allow user interaction (dismiss, act on suggestion).

3.  **Backend - Settings Service:**
    * **Responsibility (SRP):** Manage user preferences (notifications, privacy settings, AI interaction level).
    * **Implementation:**
        * User Settings Schema (SettingsID, UserID [FK], notificationPrefs [JSONB], privacyFlags [JSONB], aiInteractionLevel). **[DEFINED in Prisma - COMPLETE]**
        * Endpoints: `GET /settings`, `PUT /settings`.

4.  **Frontend - Settings Module:**
    * **Responsibility (SRP):** Provide UI for users to manage settings.
    * **Implementation:**
        * Settings Screen with toggles/options for notifications, data sharing (integrations), AI preferences. **[CREATED - Placeholder (`SettingsScreen.tsx`)]**
        * Account management options (Change Password link, Delete Account - triggers backend process).
        * API client for Settings Service.

**Phase 5: Polish & Non-Functional** **[Not Started]**

1.  **Data Privacy & Security Implementation:**
    * **Encryption:** Ensure TLS/SSL for all API communication. Encrypt sensitive data at rest in the database (e.g., AWS KMS).
    * **Permissions:** Implement fine-grained authorization checks on backend endpoints (e.g., user can only access their own data).
    * **Input Validation:** Rigorously validate and sanitize all inputs on the backend.
    * **Dependency Security:** Regularly scan dependencies (npm audit, Snyk).
    * **Compliance:** Implement data access/deletion request workflows. Clear privacy policy accessible in-app. Anonymize data used for broader analytics if needed.

2.  **Monetization Hooks:**
    * **Backend:** Add flags/checks in relevant services (e.g., AI Service, Gamification Service for advanced customizations) based on user subscription status (requires a Subscription Service/logic later).
    * **Frontend:** Conditionally render UI elements or enable features based on subscription status.

3.  **User Onboarding:**
    * **Frontend:** Implement a multi-step onboarding flow introducing core features sequentially (profile setup -> habit tracking -> health tracking -> dashboard). Use tooltips or guided tours.

4.  **Engagement & Notifications:**
    * **Backend:** Integrate with a Push Notification service (e.g., Firebase Cloud Messaging, AWS SNS). Trigger notifications from Gamification Service (streaks, badges) and based on user Settings (reminders).
    * **Frontend:** Request notification permissions. Handle incoming push notifications. Implement subtle animations for achievements.

5.  **Testing:** **[IN PROGRESS]**
    * **Unit Tests:** Jest (with `jest-expo` and `@testing-library/react-native` for frontend) configured for both frontend and backend. Initial test suites for core components/services (e.g., `AuthContext`, `AvatarDisplay`, `AuthService.register`) are passing. Backend tests have some `ts-jest` warnings and a `console.error` in `AuthService` test for `updateRefreshTokenHash` to be investigated. Goal is high coverage of business logic.
    * **Integration Tests:** Test interactions between backend services (e.g., habit completion triggering gamification). Supertest for API endpoint testing. **[Not Started]**
    * **E2E Tests:** Detox or Appium for testing user flows on simulators/devices. **[Not Started]**
    * **Manual QA:** Thorough testing across different devices and OS versions. **[Ongoing as features develop]**

6.  **Deployment:**
    * Configure cloud resources (Database, Cache, Compute instances/serverless functions, Load Balancer, CDN).
    * Finalize CI/CD pipeline for automated deployments to staging and production environments.
    * Set up monitoring, logging, and alerting (e.g., CloudWatch, Sentry, Datadog).

**Next Steps (Frontend Focus):**
The immediate goal is to start building the visual elements and layout using React Native Paper, aiming for a "pretty and minimal" aesthetic. The next logical steps discussed are:
1.  **Build Auth Screens:** Create the `LoginScreen.tsx` and `SignUpScreen.tsx` components within `frontend/src/screens` using React Native Paper components (TextInput, Button, etc.) and add them to the `MainNavigator`. **[COMPLETE - Placeholder screens created & Navigation Setup]**
2.  **Theme Customization:** Define and apply a custom theme for React Native Paper (colors, fonts) to establish the visual identity. This might involve creating a `theme.ts` file and passing it to the `PaperProvider` in `App.tsx`. **[COMPLETE - Initial theme setup]**
3.  **Dashboard Layout:** Begin structuring the `HomeScreen.tsx` to serve as the main dashboard, laying out placeholder components for key features (mood display, habit list preview, step count, etc.) using Paper components like `Card`, `List`, `Avatar`, etc. **[COMPLETE - Basic layout with Appbar containing Profile/Settings navigation]**
4.  **Create Placeholder Screens:** Added `ProfileScreen.tsx`, `SettingsScreen.tsx`, and `HabitDetailScreen.tsx` as placeholders. **[COMPLETE]**
5.  **Update Navigation:** Integrated new placeholder screens into `MainNavigator.tsx`. **[COMPLETE]**
6.  **Implement Auth Logic (Frontend):** Connect `LoginScreen` and `SignUpScreen` to backend API, handle user input, manage auth state, store tokens securely. **[COMPLETE - Core logic implemented, refresh tokens pending]**
7.  **Implement Auth Logic (Backend):** Complete JWT generation/validation, password hashing, and core logic within the `AuthService`, utilizing the generated Prisma client. **[COMPLETE - Core logic implemented, refresh tokens pending]**
8.  **Build Habit Screens (Frontend):** Implement functionality in `HabitListScreen` and `CreateHabitScreen` (forms, API calls). **[Not Started]**
9.  **Build Habit Service (Backend):** Create the NestJS service, controller, module, and implement logic utilizing the generated Prisma client for habit management. **[Needs Implementation - Prisma Client Available]**


This detailed outline provides a technical roadmap for building the GAMUR MVP. Each phase builds upon the previous one, focusing on delivering specific functionality while adhering to SOLID principles and best practices for a scalable and maintainable application. Remember to refine data models and API contracts as development progresses. **Prisma schemas for MVP features are now defined.**
