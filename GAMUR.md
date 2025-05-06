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
    * **Comprehensive `README.md` files for the root project and `backend/api/` created/updated to improve project clarity and onboarding. `frontend/README.md` is also created and detailed.**

3.  **Core Backend Infrastructure:** **[Not Started]**
    * **API Gateway:** Entry point for all client requests (e.g., AWS API Gateway). Handles routing, potentially initial auth checks.
    * **Configuration Management:** Securely manage environment variables and secrets (e.g., AWS Secrets Manager, `.env` files with caution).

**Phase 1: User Authentication & Profile** **[COMPLETE (Social Logins Pending, Avatar is Placeholder)]**

**Frontend Foundation Notes:**
*   Installed and configured React Native Paper UI library. **[COMPLETE]**
*   Installed and configured React Navigation (Native Stack). **[COMPLETE]**
*   Established basic `src` directory structure (`screens`, `navigation`). **[COMPLETE]**

1.  **Backend - Auth Service:** **[IN PROGRESS - Core logic implemented, refresh tokens pending -> COMPLETE (Core logic and tests implemented, including refresh tokens)]**
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

2.  **Frontend - Auth Module:** **[COMPLETE - Core functionality (Login, SignUp, Token Management, Logout) verified and working. Forgot Password is placeholder.]**
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

4.  **Frontend - Profile Module:** **[COMPLETE - Profile data fetching and display verified. Avatar is placeholder.]**
    * **Responsibility (SRP):** Display profile information, allow editing basic details (username, avatar selection).
    * **Implementation:**
        * Profile Screen (`ProfileScreen.tsx`) implemented with data fetching and display. **[COMPLETE]**
        * Data fetching from `GET /profile/me`. **[COMPLETE]**
        * Display of dynamic profile data (username, level, XP). **[COMPLETE]**
        * Edit Profile navigation implemented (`EditProfileScreen.tsx` allows username editing). **[COMPLETE]**
        * Form implementation and API call (`PUT /profile/me`) for editing username. **[COMPLETE - Verified]**
        * Avatar selection/display component (`AvatarDisplay.tsx`). **[COMPLETE - Placeholder Component Created, displays default icon]**
        * API client integration for Profile Service (`GET /profile/me`). **[COMPLETE]**

**Phase 2: Core Tracking Features (Health & Habits)** **[HABIT TRACKING MOSTLY COMPLETE, HEALTH TRACKING IN PROGRESS]**

1.  **Backend - Habit Service:** **[COMPLETE - CRUD, Logging, Streak Calculation, and user-specific data fetching via controller verified. AuthGuard active.]**
    * **Responsibility (SRP):** Manage habit definitions, track completions, calculate streaks.
    * **Implementation:**
        * Habit Definition Schema (HabitID, UserID [FK], name, description, frequency [daily/weekly], target, createdAt). **[DEFINED in Prisma - COMPLETE]**
        * Habit Log Schema (LogID, HabitID [FK], UserID [FK], completionDate, notes [optional]). **[DEFINED in Prisma - COMPLETE]**
        * **DTOs (`CreateHabitDto`, `UpdateHabitDto`) for habit creation and updates defined with validation. [COMPLETE]**
        * **`HabitModule`, `HabitController`, `HabitService` created. [COMPLETE]**
        * **PrismaService injected and used for database interactions. [COMPLETE]**
        * Streak calculation logic (runs on completion). **[IMPLEMENTED - Initial version in `HabitService` handles daily streaks, invoked on log. Weekly streak logic is a placeholder.]**
        * Endpoints: 
            * `POST /habits` **[IMPLEMENTED]**
            * `GET /habits` **[IMPLEMENTED]**
            * `GET /habits/{id}` **[IMPLEMENTED]**
            * `PATCH /habits/{id}` (was `PUT`) **[IMPLEMENTED]**
            * `DELETE /habits/{id}` **[IMPLEMENTED]**
            * `POST /habits/{id}/log` **[IMPLEMENTED - Logs completion and invokes streak calculation.]**
            * `GET /habits/{id}/logs` **[IMPLEMENTED - Fetches logs for a specific habit.]**
        * **All habit CRUD endpoints are protected by `JwtAuthGuard` and operate on user-specific data. [COMPLETE - Verified, `JwtAuthGuard` is active in `HabitController`.]**
    * **SOLID:** SRP. OCP by allowing different habit types/frequencies later without modifying core logging.

2.  **Frontend - Habit Module:** **[COMPLETE - Habit listing, creation, editing, logging, and detail view are functional. Streak display verified.]**
    * **Responsibility (SRP):** Allow users to create, view, edit, delete habits; mark habits as complete; display streaks.
    * **Implementation:**
        * Habit List Screen (`HabitListScreen.tsx`). **[IMPLEMENTED - Fetches and displays habits using react-query. Includes FAB for creation. Each item has a menu with Edit and Delete options. Delete includes a confirmation dialog. Handles loading/error states and provides user feedback via Snackbar. Includes streak display and checkmark icon for logging completion directly from the list. Navigation to `HabitDetailScreen` is correct.]**
        * Create/Edit Habit Form Screen (`CreateHabitScreen.tsx`, `EditHabitScreen.tsx`). **[IMPLEMENTED - `CreateHabitScreen.tsx` allows new habit creation with form (name, description, frequency, target), validation, and API call using `useMutation`. `EditHabitScreen.tsx` fetches existing habit data, pre-fills form, and uses `useMutation` to update. Both handle loading/error states, invalidate queries, and navigate on success. These are fully functional.]**
        * Habit detail view with progress/log (`HabitDetailScreen.tsx`). **[IMPLEMENTED - Fetches and displays habit details, including corrected `currentStreak`. Fetches and displays habit completion logs. Includes "Mark Complete" functionality. Navigation from `HabitListScreen` to this screen is correct. Link to Edit screen remains.]**
        * Checkmark/completion interaction. **[IMPLEMENTED - In `HabitListScreen.tsx` via icon button triggering `logHabitCompletionMutation`. Also implemented in `HabitDetailScreen.tsx`.]**
        * API client for Habit Service. **[IMPLEMENTED - `frontend/src/api/habitService.ts` provides functions for CRUD, `logHabitCompletion`, and `getHabitLogs`. The `HabitLog` type is defined in `frontend/src/types/habit.ts`. Authentication is handled by the global `apiClient`.]**
        * `QueryClientProvider` for `react-query` set up in `frontend/App.tsx`. **[COMPLETE]**

3.  **Backend - Health Data Service:** **[IN PROGRESS - Basic Scaffolding and Manual Log Entry Implemented]**
    * **Responsibility (SRP):** Store manually entered health data and data synced from external sources.
    * **Implementation:**
        * `HealthModule`, `HealthController`, `HealthService` created. **[NEW - COMPLETE]**
        * `CreateHealthLogDto` defined to accept a `date` and an array of `HealthMetricDto` (each with `metricType` and `value`). **[NEW - COMPLETE]**
        * `PrismaService` injected and used for database interactions. **[NEW - COMPLETE]**
        * Manual Health Log Schema (LogID, UserID [FK], date, metricType [mood, sleepHours, sleepQuality], value). **[DEFINED in Prisma - COMPLETE (as `HealthLog`, `HealthMetricType` enum updated with `WEIGHT`, `HEIGHT`, database migrated)]**
        * Synced Health Log Schema (LogID, UserID [FK], date, metricType [steps], value, source [Apple Health/Google Fit]). **[DEFINED in Prisma - COMPLETE (as `HealthLog`, uses `HealthDataSource` enum)]**
        * Endpoints:
            * `POST /health/log/manual`: **[IMPLEMENTED - Accepts an array of metrics per date. `JwtAuthGuard` applied. Service creates individual `HealthLog` entries with `source: MANUAL`.]**
            * `GET /health/logs`: **[IMPLEMENTED - Basic version fetches all logs for a user, ordered by date. `JwtAuthGuard` applied.]**
            * `POST /health/sync` (Internal endpoint called by integration logic). **[Not Started]**
        * Service methods to query data for dashboard/AI. **[Basic `getHealthLogs` implemented; advanced querying TBD]**
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

**Phase 3: Dashboard & Gamification** **[IN PROGRESS - Frontend Dashboard has initial static layout, Backend Not Started (except Prisma Schemas)]**

1.  **Backend - Dashboard Service / Aggregation Logic:** **[Not Started]**
    * **Responsibility (SRP):** Aggregate data from Habit, Health, and Profile services for dashboard display.
    * **Implementation:**
        * Does not own data but queries other services.
        * Endpoint: `GET /dashboard?date=YYYY-MM-DD` (returns aggregated snapshot).
        * Endpoint: `GET /dashboard/trends?metric=mood&period=week` (returns data for charts).
    * **SOLID:** SRP. Relies on interfaces (DIP) of other services.

2.  **Frontend - Dashboard Module:** **[IN PROGRESS - HomeScreen.tsx implemented with static layout, placeholder data, and navigation]**
    * **Responsibility (SRP):** Fetch and display the aggregated daily snapshot and trends. Allow customization.
    * **Implementation:**
        * Dashboard Screen (`HomeScreen.tsx`). **[IMPLEMENTED - Static layout with multiple Card components for Welcome, Mood, Habits (static examples), Activity. Includes Appbar navigation to Profile & Settings. Placeholder text for dynamic data.]**
        * Components for displaying mood, sleep, steps, active habits. **[Needs Implementation - Placeholders exist in `HomeScreen.tsx`.]**
        * Charting Library (e.g., `react-native-chart-kit`) integration for trends. **[Needs Implementation]**
        * API client for Dashboard Service. **[Needs Implementation]**
        * Local settings for dashboard customization. **[Needs Implementation]**
    * **SOLID:** SRP. OCP via strategy/rule pattern for adding new XP/Badge/Quest rules. LSP if different Quest types share common behaviors.

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

**Phase 4: AI Companion & Settings** **[IN PROGRESS - SettingsScreen.tsx UI built with placeholder logic, Backend Not Started (except Prisma Schemas)]**

1.  **Backend - AI Service / Logic:** **[Not Started (AIOutput Schema in Prisma is DEFINED)]**
    * **Responsibility (SRP):** Generate insights and micro-quest suggestions based on user data.
    * **Implementation (MVP - Rule-Based):**
        * Scheduled Job (e.g., daily cron): Queries Health/Habit data via internal APIs/direct DB access (read-only replicas preferred).
        * Rule Engine: Simple rules (e.g., `IF mood_low AND sleep_low THEN suggest "Prioritize sleep"`).
        * Persistence: Store generated insights/suggestions (AIOutput Schema: OutputID, UserID [FK], type [insight/suggestion], text, createdAt, seenByUser). **[DEFINED in Prisma - COMPLETE]**
        * Micro-Quest Generation: Create Quest definitions via Gamification Service API based on rules (e.g., `IF steps_low_yesterday THEN create_quest "Walk 1 mile"`).
        * Endpoint: `GET /ai/insights` (returns unseen insights/suggestions).
    * **SOLID:** SRP. OCP for adding new rules/insights. DIP dependence on abstracted data access.

2.  **Frontend - AI Display:** **[Not Started]**
    * **Responsibility (SRP):** Display AI insights/suggestions to the user.
    * **Implementation:**
        * Component on Dashboard or dedicated section.
        * Fetch insights from AI Service endpoint.
        * Allow user interaction (dismiss, act on suggestion).

3.  **Backend - Settings Service:** **[Not Started (UserSettings Schema in Prisma is DEFINED)]**
    * **Responsibility (SRP):** Manage user preferences (notifications, privacy settings, AI interaction level).
    * **Implementation:**
        * User Settings Schema (SettingsID, UserID [FK], notificationPrefs [JSONB], privacyFlags [JSONB], aiInteractionLevel). **[DEFINED in Prisma - COMPLETE]**
        * Endpoints: `GET /settings`, `PUT /settings`.

4.  **Frontend - Settings Module:**
    * **Responsibility (SRP):** Provide UI for users to manage settings.
    * **Implementation:**
        * Settings Screen with toggles/options for notifications, data sharing (integrations), AI preferences. **[IMPLEMENTED - `SettingsScreen.tsx` UI built with `List.Section` for General (Dark Mode switch), Notifications (Enable switch), Account (Change Password, Policy, ToS, Logout, Delete Account buttons). Logic is placeholder.]**
        * Account management options (Change Password link, Delete Account - triggers backend process). **[UI Buttons Exist - Backend process and frontend logic pending]**
        * API client for Settings Service. **[Needs Implementation]**

**Phase 5: Polish & Non-Functional** **[MOSTLY NOT STARTED (Testing is IN PROGRESS)]**

1.  **Data Privacy & Security Implementation:** **[Not Started (beyond basic DTO validation and Prisma query patterns)]**
    * **Encryption:** Ensure TLS/SSL for all API communication. Encrypt sensitive data at rest in the database (e.g., AWS KMS).
    * **Permissions:** Implement fine-grained authorization checks on backend endpoints (e.g., user can only access their own data). **(Partially addressed by `userId` checks, but needs consistent `JwtAuthGuard` usage and potentially more roles/permissions).**
    * **Input Validation:** Rigorously validate and sanitize all inputs on the backend. **(Initial DTO validation in place).**
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
    * **Unit Tests:** Jest (with `jest-expo` and `@testing-library/react-native` for frontend) configured for both frontend and backend. Initial test suites for core components/services (e.g., `AuthContext`, `AvatarDisplay`, `AuthService.register`) are passing. Backend tests for `AuthService` are comprehensive and passing. **Backend tests for `HabitService` and `HabitController` (CRUD operations) are now implemented and passing.** The previously noted `console.error` for `updateRefreshTokenHash` during tests has been addressed by spying on `console.error` in relevant test cases. Some general `ts-jest` warnings for `.js` files in `generated/prisma` might still exist. Goal is high coverage of business logic.
    * **Integration Tests:** Test interactions between backend services (e.g., habit completion triggering gamification). Supertest for API endpoint testing. **[Not Started]**
    * **E2E Tests:** Detox or Appium for testing user flows on simulators/devices. **[Not Started]**
    * **Manual QA:** Thorough testing across different devices and OS versions. **[Ongoing as features develop]**

6.  **Deployment:**
    * Configure cloud resources (Database, Cache, Compute instances/serverless functions, Load Balancer, CDN).
    * Finalize CI/CD pipeline for automated deployments to staging and production environments.
    * Set up monitoring, logging, and alerting (e.g., CloudWatch, Sentry, Datadog).

**Next Steps (Completed & Upcoming):**

The following items, recently focused on, have been addressed:

1.  **Backend - Habit Service Security:** [COMPLETED]
    *   `JwtAuthGuard` is correctly applied to all endpoints in `backend/api/src/habit/habit.controller.ts`.
2.  **Backend - Habit Service Enhancement:** [COMPLETED]
    *   The `getHabitLogs(userId, habitId)` method from `HabitService` is exposed via a new `GET /habits/:habitId/logs` endpoint in `HabitController`.
3.  **Frontend - Habit Module Refinements:** [COMPLETED]
    *   A new function in `frontend/src/api/habitService.ts` calls the new `GET /habits/:habitId/logs` backend endpoint (and `HabitLog` type is defined).
    *   `HabitDetailScreen.tsx` now:
        *   Correctly displays the `currentStreak`.
        *   Fetches and displays habit completion logs.
        *   Includes "Mark Complete" functionality.
    *   `HabitListScreen.tsx` now correctly navigates from `onViewDetails` to `HabitDetailScreen`.
4.  **Review and Refine Weekly Streak Logic (Backend - Optional Enhancement):** [DEFERRED]
    *   The `calculateAndUpdateStreak` in `HabitService` has a placeholder for non-DAILY habits. This will be improved later.
5.  **Backend - Health Data Service - Initial Implementation:** [NEW - COMPLETED]
    *   Scaffolded `HealthModule`, `HealthController`, `HealthService`. **[NEW - COMPLETED]**
    *   Defined `CreateHealthLogDto` to accept a date and an array of `HealthMetricDto` objects. **[NEW - COMPLETED]**
    *   Updated `HealthMetricType` enum in `prisma/schema.prisma` to include `WEIGHT` and `HEIGHT`. **[NEW - COMPLETED]**
    *   Ran Prisma migration to apply schema changes. **[NEW - COMPLETED]**
    *   Implemented `createManualLog` in `HealthService` to process the DTO and create multiple `HealthLog` entries. **[NEW - COMPLETED]**
    *   Implemented a basic `getHealthLogs` in `HealthService`. **[NEW - COMPLETED]**
    *   Applied `JwtAuthGuard` to `HealthController`. **[NEW - COMPLETED]**
6.  **Frontend/Backend Integration - Auth & Core Features:** [NEW - COMPLETED]
    *   Resolved a series of 401 (Unauthorized) and 404 (Not Found) errors by:
        *   Correcting the frontend API client's base URL to include the `/api` prefix.
        *   Adding a global `/api` prefix to the backend NestJS application in `main.ts` to align routing.
        *   Ensuring the frontend correctly destructured `access_token` (snake_case) from the login response instead of expecting `accessToken` (camelCase), which resolved issues with `SecureStore` attempting to save non-string token values.
        *   Fixed the Logout button functionality in the `SettingsScreen`.
        *   Resolved a 500 (Internal Server Error) when fetching habits by ensuring `userId` (from JWT) was parsed to an integer in the `HabitController` before being used in Prisma queries.
        *   As a result, user login, logout, Profile screen data fetching, and Habit list data fetching are now working correctly.

With these refinements to the Habit Tracking feature complete, and the initial backend for Health Tracking set up, the next steps for **Phase 2: Health Tracking Features** are:

1.  **Backend - Health Data Service - Refinements:**
    *   Refine error handling in `HealthService` (e.g., for partial failures during batch metric logging).
    *   Enhance `getHealthLogs` with filtering capabilities (e.g., by date range, metric type).
    *   Write unit and integration tests for `HealthController` and `HealthService`.
2.  **Frontend - Health Module - Initial Implementation:**
    *   Create basic UI for manual health entry (e.g., mood, sleep, weight).
    *   Develop API client functions in the frontend to interact with the new `/health/log/manual` and `/health/logs` endpoints.
    *   Display logged health data.

---
This detailed outline provides a technical roadmap for building the GAMUR MVP. Each phase builds upon the previous one, focusing on delivering specific functionality while adhering to SOLID principles and best practices for a scalable and maintainable application. Remember to refine data models and API contracts as development progresses. **Prisma schemas for MVP features are now defined.**
