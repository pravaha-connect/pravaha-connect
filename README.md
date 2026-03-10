<p align="center">
  <img src="https://img.shields.io/badge/FlowLink-v1.0-29ABE2?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=&logoColor=white" alt="FlowLink Badge"/>
  <img src="https://img.shields.io/badge/Firebase-Powered-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Status-Active-10B981?style=for-the-badge" alt="Status"/>
</p>

<h1 align="center">
  🌊 FlowLink By Innovative minds
</h1>

<h3 align="center">
  <em>Hierarchical Problem Management & Communication Platform</em>
</h3>

<p align="center">
  <strong>Connect • Collaborate • Resolve</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-user-roles">User Roles</a> •
  <a href="#-team">Team</a>
</p>

---

## 🎯 What is FlowLink?

**FlowLink** is a comprehensive hierarchical problem management system designed for organizations, educational institutions, and communities. It enables seamless communication flow through organizational hierarchies, allowing problems to be reported, tracked, escalated, and resolved efficiently.

> 🌟 *"Streamlining communication from the ground up to the top, one problem at a time."*

---

## ✨ Features

### 🔐 Authentication & Security
| Feature | Description |
|---------|-------------|
| 🔑 Google Sign-In | Secure OAuth 2.0 authentication |
| 🛡️ Role-Based Access | Super Admin, Org Admin, Member roles |
| 🔒 Firebase Security Rules | Granular permission control |
| 📧 Email Verification | Verified user accounts |

### 🏢 Hierarchical Organization System
```
🏛️ Organization (Root)
├── 📚 Department
│   ├── 👥 Team A
│   │   └── 📁 Sub-Team
│   └── 👥 Team B
├── 🏠 Hostel
│   ├── 🏢 Block A
│   └── 🏢 Block B
└── ⚽ Sports
    ├── 🏏 Cricket
    └── ⚽ Football
```

| Feature | Description |
|---------|-------------|
| 🌳 Unlimited Nesting | Create deep hierarchical structures |
| 🔗 Dynamic Sub-Nodes | Add/remove nodes on the fly |
| 👑 Node Admins | Each node can have dedicated admins |
| 🔄 Branch Requests | Request new branches with approval workflow |
| 🤝 Join Requests | Request to join existing organizations |

### 📋 Problem Management System

| Feature | Description |
|---------|-------------|
| ✍️ Problem Reporting | Submit problems with detailed descriptions |
| 🎯 Multi-Node Targeting | Target problems to specific hierarchy nodes |
| 📊 Vote-Based Priority | Community upvotes/downvotes determine priority |
| ✅ Admin Approval | Problems require admin approval before publishing |
| 🔄 Status Tracking | Open → Solved → Archived workflow |
| 📌 Bookmarking | Save important problems for quick access |
| 🔍 Search & Filter | Find problems by category, status, priority |

### 📢 Announcements System
| Feature | Description |
|---------|-------------|
| 📣 Broadcast Messages | Send announcements to entire organization |
| 🎯 Scoped Announcements | Target specific nodes or global |
| ⚡ Urgent Flags | Mark critical announcements |
| ✅ Moderation | Admin approval for announcements |

### 🛠️ Admin Dashboard
| Feature | Description |
|---------|-------------|
| 📊 Analytics Overview | Members, problems, approvals at a glance |
| ✅ Pending Approvals | Review and approve/reject submissions |
| ⬆️ Escalation Management | Handle escalated issues |
| 📁 Archive Management | Manage archived items |
| 👥 Member Management | View and manage organization members |
| 🌿 Sub-Node Management | Create and organize hierarchy |

### 👑 Super Admin Panel
| Feature | Description |
|---------|-------------|
| 🏢 Organization Management | Approve/reject new organizations |
| 👥 User Overview | View all platform users |
| 📊 Platform Analytics | Global statistics and metrics |
| ⚙️ System Configuration | Platform-wide settings |

### 🎨 User Experience
| Feature | Description |
|---------|-------------|
| 📱 Responsive Design | Works on desktop, tablet, mobile |
| 🌊 Smooth Animations | Fluid transitions and effects |
| 🎨 Modern UI | Clean, intuitive interface |
| 🔔 Toast Notifications | Real-time feedback |
| 🌙 Visual Hierarchy | Clear information architecture |

---

## 🏗️ Architecture

### Tech Stack

```
┌─────────────────────────────────────────────────────────┐
│                    🎨 FRONTEND                          │
├─────────────────────────────────────────────────────────┤
│  HTML5 • CSS3 • Vanilla JavaScript • Font Awesome       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   🔥 FIREBASE                           │
├─────────────────────────────────────────────────────────┤
│  Authentication • Firestore Database • Security Rules   │
└─────────────────────────────────────────────────────────┘
```

### Database Collections

```javascript
📦 Firestore Database
├── 👥 users/                    // User profiles & preferences
│   ├── {email}/
│   │   ├── hierarchies/         // User's organization memberships
│   │   └── notifications/       // User notifications
│   │
├── 🏢 hierarchies/              // Global organization structure
│   └── {orgId}/
│       └── sub-nodes/           // Nested hierarchy nodes
│           └── {nodeId}/
│               └── sub-nodes/   // Recursive nesting
│
├── 📋 problems/                 // Active problems
├── ✅ solvedProblems/           // Resolved problems
├── 📁 archivedProblems/         // Archived problems
├── ⏳ pendingProblemApprovals/  // Problems awaiting approval
├── ⬆️ escalatedProblems/        // Escalated issues
│
├── 📢 announcements/            // Published announcements
├── ⏳ pendingAnnouncementApprovals/
│
└── 📝 pendingApprovals/         // Join/Branch requests
```

### Hierarchy Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    User      │────▶│   Problem    │────▶│    Admin     │
│  Submits     │     │   Created    │     │   Reviews    │
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                     ┌───────────────────────────┼───────────────────────────┐
                     ▼                           ▼                           ▼
              ┌──────────────┐           ┌──────────────┐           ┌──────────────┐
              │   Approve    │           │    Reject    │           │   Escalate   │
              │  ✅ Published │           │  ❌ Rejected  │           │  ⬆️ Higher   │
              └──────────────┘           └──────────────┘           └──────────────┘
                     │
                     ▼
              ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
              │    Open      │────▶│    Solved    │────▶│   Archived   │
              │   Problem    │     │   Problem    │     │   Problem    │
              └──────────────┘     └──────────────┘     └──────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- 📦 Node.js (v14+)
- 🔥 Firebase Account
- 🌐 Modern Web Browser

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/flowlink.git
cd flowlink
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure Firebase**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
- Enable Authentication (Google Sign-In)
- Create Firestore Database
- Update `firebase-config.js` with your credentials

4️⃣ **Deploy Firestore Rules**
```bash
firebase deploy --only firestore:rules
```

5️⃣ **Start the application**
```bash
npm start
```

6️⃣ **Open in browser**
```
http://localhost:3000
```

---

## 👥 User Roles

### 👑 Super Admin
> *Platform-level administrator with full access*

| Permission | Access |
|------------|--------|
| Approve Organizations | ✅ |
| View All Users | ✅ |
| Platform Analytics | ✅ |
| System Configuration | ✅ |

**🔐 Super Admin Credentials:**
```
📧 Email: admin@flowlink.edu
🔑 Password: drona@admin
```

### 🏢 Organization Admin
> *Manages specific organization and its hierarchy*

| Permission | Access |
|------------|--------|
| Approve Problems | ✅ |
| Manage Members | ✅ |
| Create Sub-Nodes | ✅ |
| Handle Escalations | ✅ |
| View Analytics | ✅ |

### 👤 Member
> *Regular user within an organization*

| Permission | Access |
|------------|--------|
| Submit Problems | ✅ |
| Vote on Problems | ✅ |
| Bookmark Problems | ✅ |
| View Announcements | ✅ |
| Join Organizations | ✅ |

---

## 📱 Pages Overview

| Page | Description | Access |
|------|-------------|--------|
| 🏠 `index.html` | Landing page | Public |
| 🚪 `login.html` | Authentication | Public |
| 👋 `welcome.html` | Onboarding & org setup | Authenticated |
| 📊 `dashboard.html` | Main user dashboard | Authenticated |
| 🛠️ `admin-dashboard.html` | Admin control panel | Org Admins |
| 👑 `super-admin.html` | Platform management | Super Admin |
| ➕ `admin-add-problem.html` | Add problem (admin) | Org Admins |
| 📢 `admin-add-announcement.html` | Add announcement | Org Admins |

---

## 🎨 UI Components

### Color Palette
```css
🔵 Primary:    #29ABE2 (FlowLink Blue)
🟢 Secondary:  #29E2D0 (Teal Accent)
🟢 Success:    #10B981 (Green)
🟡 Warning:    #F59E0B (Amber)
🔴 Danger:     #EF4444 (Red)
⚫ Dark:       #1F2933 (Charcoal)
⚪ Light:      #F9FAFB (Off-White)
```

### Typography
```css
📝 Headings: 'Poppins', sans-serif
📄 Body:     'PT Sans', sans-serif
```

---

## 📊 Data Flow

### Problem Lifecycle
```
📝 Submit → ⏳ Pending → ✅ Approved → 📋 Open → ✔️ Solved → 📁 Archived
                │
                └── ❌ Rejected
                └── ⬆️ Escalated
```

### Vote-Based Priority System
```
📊 Priority Calculation:
┌─────────────────────────────────────────┐
│  Priority = (Upvotes - Downvotes) +     │
│             (Hierarchy Level × 2)       │
├─────────────────────────────────────────┤
│  🔴 High:   Score > 10                  │
│  🟡 Medium: Score 5-10                  │
│  🔵 Low:    Score < 5                   │
└─────────────────────────────────────────┘
```

---

## 🔒 Security

### Firestore Rules Highlights
```javascript
✅ Authenticated users only
✅ Role-based permissions
✅ Owner-based access control
✅ Admin verification
✅ Super admin privileges
```

### Best Practices Implemented
- 🔐 No sensitive data in client code
- 🛡️ Server-side validation via rules
- 🔑 Secure authentication flow
- 📝 Audit trail for actions

---

## 👨‍💻 Development Team

<table align="center">
  <tr>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Animesh+Gupta&background=29ABE2&color=fff&size=100&rounded=true" width="100px;" alt="Animesh Gupta"/>
      <br />
      <sub><b>Animesh Gupta</b></sub>
      <br />
      <sub>🚀 Lead Developer</sub>
    </td>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Aryash+Singh&background=29E2D0&color=fff&size=100&rounded=true" width="100px;" alt="Aryash Singh"/>
      <br />
      <sub><b>Riya Dwivedi</b></sub>
      <br />
      <sub>💻 Developer</sub>
    </td>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Rudra+Samadhiya&background=10B981&color=fff&size=100&rounded=true" width="100px;" alt="Rudra Samadhiya"/>
      <br />
      <sub><b>Rudra Samadhiya</b></sub>
      <br />
      <sub>💻 Developer</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Kishlay+Singh&background=F59E0B&color=fff&size=100&rounded=true" width="100px;" alt="Kishlay Singh"/>
      <br />
      <sub><b>Kishlay Singh</b></sub>
      <br />
      <sub>💻 Developer</sub>
    </td>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Gaurav+Singh&background=8B5CF6&color=fff&size=100&rounded=true" width="100px;" alt="Gaurav Singh"/>
      <br />
      <sub><b>Gaurav Singh</b></sub>
      <br />
      <sub>💻 Developer</sub>
    </td>
    <td align="center">
      <img src="https://ui-avatars.com/api/?name=Shubh+Kamal&background=EC4899&color=fff&size=100&rounded=true" width="100px;" alt="Shubh Kamal"/>
      <br />
      <sub><b>Prachi Sharma</b></sub>
      <br />
      <sub>💻 Developer</sub>
    </td>
  </tr>
</table>

---

## 📈 Future Roadmap

- [ ] 📱 Mobile App (React Native)
- [ ] 🔔 Push Notifications
- [ ] 📊 Advanced Analytics Dashboard
- [ ] 🤖 AI-Powered Problem Categorization
- [ ] 💬 Real-time Chat Integration
- [ ] 📧 Email Notifications
- [ ] 🌍 Multi-language Support
- [ ] 🎨 Theme Customization
- [ ] 📤 Export Reports (PDF/Excel)
- [ ] 🔗 API for Third-party Integration

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- 🔥 [Firebase](https://firebase.google.com) - Backend Infrastructure
- 🎨 [Font Awesome](https://fontawesome.com) - Icons
- 📝 [Google Fonts](https://fonts.google.com) - Typography
- 💡 Inspiration from modern SaaS platforms

---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge" alt="Made with Love"/>
  <img src="https://img.shields.io/badge/Built%20for-Everyone%20Organization-29ABE2?style=for-the-badge" alt="Everyone"/>
</p>

<p align="center">
  <strong>🌊 FlowLink - Where Problems Flow to Solutions 🌊</strong>
</p>

<p align="center">
  <sub>© 2025 FlowLink By Innovative minds Team. All rights reserved.</sub>
</p>
