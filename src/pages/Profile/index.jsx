import {useEffect, useRef, useState} from 'react'
import {
  Activity,
  Award,
  Bell,
  BookOpen,
  Brain,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Edit3,
  Flame,
  Globe2,
  KeyRound,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Pencil,
  Save,
  Settings2,
  ShieldCheck,
  Target,
  Trophy,
  User,
  X,
  Zap,
} from 'lucide-react'
import {useAuth} from '../../context/AuthContext'
import './index.css'

const defaultProfile = {
  name: 'Madhu Karrolla',
  email: 'madhu@example.com',
  bio: 'Building better habits by understanding every mistake.',
  location: 'India',
  role: 'Full Stack Developer',
  website: '',
  github: '',
  linkedin: '',
  learningGoal: 'Become a stronger problem solver',
  dailyGoal: '30 minutes',
  difficulty: 'Medium',
  language: 'JavaScript',
}

const achievements = [
  {
    id: 1,
    icon: Flame,
    title: '7 Day Streak',
    description: 'Practiced for 7 consecutive days',
    unlocked: true,
  },
  {
    id: 2,
    icon: Brain,
    title: 'Failure Detective',
    description: 'Analyzed 25 failures',
    unlocked: true,
  },
  {
    id: 3,
    icon: Target,
    title: 'Accuracy Builder',
    description: 'Reached 75% accuracy',
    unlocked: true,
  },
  {
    id: 4,
    icon: Trophy,
    title: 'Problem Solver',
    description: 'Solved 100 problems',
    unlocked: true,
  },
  {
    id: 5,
    icon: Zap,
    title: 'Fast Learner',
    description: 'Improved accuracy by 20%',
    unlocked: false,
  },
  {
    id: 6,
    icon: Award,
    title: 'Pattern Master',
    description: 'Resolved 10 recurring patterns',
    unlocked: false,
  },
]

const recentActivity = [
  {
    id: 1,
    title: 'Completed Two Sum',
    description: 'Arrays · Easy',
    time: '12 min ago',
    type: 'success',
  },
  {
    id: 2,
    title: 'Failure analyzed',
    description: 'Boundary condition detected',
    time: '1 hour ago',
    type: 'failure',
  },
  {
    id: 3,
    title: 'Completed Valid Parentheses',
    description: 'Stack · Medium',
    time: 'Yesterday',
    type: 'success',
  },
  {
    id: 4,
    title: 'New recommendation generated',
    description: 'Based on recurring patterns',
    time: 'Yesterday',
    type: 'ai',
  },
]
const handleProfileImageChange = event => {
  const file = event.target.files[0]

  if (!file) {
    return
  }

  // Allow only image files
  if (!file.type.startsWith('image/')) {
    setSavedMessage('Please select a valid image file.')
    return
  }

  // Limit image size to 5 MB
  if (file.size > 5 * 1024 * 1024) {
    setSavedMessage('Image size must be less than 5 MB.')
    return
  }

  const reader = new FileReader()

  reader.onloadend = () => {
    const imageData = reader.result

    setProfileImage(imageData)
    localStorage.setItem(
      'failsense_profile_image',
      imageData,
    )

    setSavedMessage('Profile image updated successfully.')

    setTimeout(() => {
      setSavedMessage('')
    }, 3000)
  }

  reader.readAsDataURL(file)
}

const Profile = () => {
  const {user, logout} = useAuth()
const fileInputRef = useRef(null)

const [profileImage, setProfileImage] = useState(
  localStorage.getItem('failsense_profile_image') || '',
)

  const [profile, setProfile] = useState(defaultProfile)
  const [editMode, setEditMode] = useState(false)
  const [draftProfile, setDraftProfile] = useState(defaultProfile)

  const [activeSection, setActiveSection] = useState('profile')
  const [showPasswordForm, setShowPasswordForm] = useState(false)

  const [passwords, setPasswords] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    weeklyReport: true,
    aiInsights: true,
    recommendationAlerts: false,
  })

  const [savedMessage, setSavedMessage] = useState('')

  useEffect(() => {
    const storedProfile = localStorage.getItem('failsense_profile')

    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile)
        setProfile(parsedProfile)
        setDraftProfile(parsedProfile)
      } catch {
        // Keep default profile
      }
    } else if (user) {
      const userProfile = {
        ...defaultProfile,
        name: user.name || defaultProfile.name,
        email: user.email || defaultProfile.email,
      }

      setProfile(userProfile)
      setDraftProfile(userProfile)
    }

    const storedPreferences = localStorage.getItem(
      'failsense_preferences',
    )

    if (storedPreferences) {
      try {
        setPreferences(JSON.parse(storedPreferences))
      } catch {
        // Keep defaults
      }
    }
  }, [user])

  const handleDraftChange = event => {
    const {name, value} = event.target

    setDraftProfile(previous => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleEdit = () => {
    setDraftProfile(profile)
    setEditMode(true)
    setSavedMessage('')
  }

  const handleCancel = () => {
    setDraftProfile(profile)
    setEditMode(false)
  }

  const handleSaveProfile = event => {
    event.preventDefault()

    setProfile(draftProfile)

    localStorage.setItem(
      'failsense_profile',
      JSON.stringify(draftProfile),
    )

    setEditMode(false)
    setSavedMessage('Profile updated successfully.')

    setTimeout(() => {
      setSavedMessage('')
    }, 3000)
  }

  const handlePreferenceChange = key => {
    setPreferences(previous => {
      const updatedPreferences = {
        ...previous,
        [key]: !previous[key],
      }

      localStorage.setItem(
        'failsense_preferences',
        JSON.stringify(updatedPreferences),
      )

      return updatedPreferences
    })
  }

  const handlePasswordChange = event => {
    const {name, value} = event.target

    setPasswords(previous => ({
      ...previous,
      [name]: value,
    }))
  }

  const handlePasswordSubmit = event => {
    event.preventDefault()

    if (
      !passwords.current ||
      !passwords.newPassword ||
      !passwords.confirm
    ) {
      return
    }

    if (passwords.newPassword !== passwords.confirm) {
      setSavedMessage('New passwords do not match.')
      return
    }

    setPasswords({
      current: '',
      newPassword: '',
      confirm: '',
    })

    setShowPasswordForm(false)
    setSavedMessage('Password updated successfully.')

    setTimeout(() => {
      setSavedMessage('')
    }, 3000)
  }

  const handleSectionChange = section => {
    setActiveSection(section)

    setTimeout(() => {
      document
        .getElementById(`profile-${section}`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 50)
  }

  const handleProfileImageChange = event => {
  const file = event.target.files?.[0]

  if (!file) {
    return
  }

  if (!file.type.startsWith('image/')) {
    setSavedMessage('Please select a valid image.')
    return
  }

  if (file.size > 5 * 1024 * 1024) {
    setSavedMessage('Image must be less than 5 MB.')
    return
  }

  const reader = new FileReader()

  reader.onload = () => {
    const imageData = reader.result

    setProfileImage(imageData)
    localStorage.setItem('failsense_profile_image', imageData)

    setSavedMessage('Profile image updated successfully.')

    setTimeout(() => {
      setSavedMessage('')
    }, 3000)
  }

  reader.readAsDataURL(file)

  // Allows selecting the same image again later
  event.target.value = ''
}
  const firstLetter =
    profile.name?.charAt(0)?.toUpperCase() || 'M'

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div>
          <div className="profile-eyebrow">
            <User size={14} />
            ACCOUNT CENTER
          </div>

          <h1>Your profile</h1>

          <p>
            Manage your identity, learning preferences, security,
            and personal intelligence settings.
          </p>
        </div>

        <div className="profile-header-actions">
          {savedMessage && (
            <div className="profile-save-message">
              <Check size={15} />
              {savedMessage}
            </div>
          )}

          {!editMode ? (
            <button
              type="button"
              className="profile-edit-button"
              onClick={handleEdit}
            >
              <Edit3 size={17} />
              Edit profile
            </button>
          ) : (
            <div className="profile-edit-actions">
              <button
                type="button"
                className="profile-cancel-button"
                onClick={handleCancel}
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-button"
                onClick={handleSaveProfile}
              >
                <Save size={16} />
                Save changes
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="profile-layout">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-sidebar-card">
            <div className="profile-mini-avatar">
              {firstLetter}
              <span className="profile-online-dot" />
            </div>

            <h3>{profile.name}</h3>
            <p>{profile.role}</p>

            <div className="profile-sidebar-divider" />

            <button
              type="button"
              className={
                activeSection === 'profile'
                  ? 'profile-nav-item active'
                  : 'profile-nav-item'
              }
              onClick={() => handleSectionChange('profile')}
            >
              <User size={17} />
              Personal information
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              className={
                activeSection === 'learning'
                  ? 'profile-nav-item active'
                  : 'profile-nav-item'
              }
              onClick={() => handleSectionChange('learning')}
            >
              <Brain size={17} />
              Learning preferences
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              className={
                activeSection === 'achievements'
                  ? 'profile-nav-item active'
                  : 'profile-nav-item'
              }
              onClick={() => handleSectionChange('achievements')}
            >
              <Trophy size={17} />
              Achievements
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              className={
                activeSection === 'activity'
                  ? 'profile-nav-item active'
                  : 'profile-nav-item'
              }
              onClick={() => handleSectionChange('activity')}
            >
              <Activity size={17} />
              Recent activity
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              className={
                activeSection === 'security'
                  ? 'profile-nav-item active'
                  : 'profile-nav-item'
              }
              onClick={() => handleSectionChange('security')}
            >
              <ShieldCheck size={17} />
              Security
              <ChevronRight size={15} />
            </button>

            <div className="profile-sidebar-divider" />

            <button
              type="button"
              className="profile-logout-button"
              onClick={logout}
            >
              <LogOut size={17} />
              Sign out
            </button>
          </div>

          <div className="profile-sidebar-status">
            <div className="status-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Your account is secure</strong>
              <span>Last checked just now</span>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="profile-content">
          {/* Profile Hero */}
          <section
            id="profile-profile"
            className="profile-card profile-hero-card"
          >
            <div className="profile-hero-background">
              <div className="profile-glow profile-glow-one" />
              <div className="profile-glow profile-glow-two" />
            </div>

            <div className="profile-hero-content">
<div className="profile-avatar-wrapper">
  <div className="profile-avatar">
    {profileImage ? (
      <img
        src={profileImage}
        alt={`${profile.name} profile`}
        className="profile-avatar-image"
      />
    ) : (
      profile.name?.charAt(0).toUpperCase()
    )}
  </div>

  <button
    type="button"
    className="profile-camera-button"
    aria-label="Change profile picture"
    onClick={() => fileInputRef.current?.click()}
  >
    <Camera size={17} />
  </button>

  <input
    ref={fileInputRef}
    type="file"
    accept="image/*"
    className="profile-image-input"
    onChange={handleProfileImageChange}
  />
</div>

              <div className="profile-hero-info">
                <div className="profile-name-row">
                  <h2>{profile.name}</h2>
                  <span className="profile-verified">
                    <Check size={12} />
                    Verified
                  </span>
                </div>

                <p className="profile-role">{profile.role}</p>

                <p className="profile-bio">{profile.bio}</p>

                <div className="profile-meta">
                  <span>
                    <Mail size={14} />
                    {profile.email}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {profile.location}
                  </span>
                </div>
              </div>

              <div className="profile-member">
                <span>MEMBER SINCE</span>
                <strong>SEP 2026</strong>
              </div>
            </div>
          </section>

          {/* Personal Information */}
          <section
            id="profile-profile"
            className="profile-card"
          >
            <div className="profile-card-heading">
              <div>
                <span className="profile-section-label">
                  IDENTITY
                </span>
                <h2>Personal information</h2>
                <p>
                  Keep your account information accurate and up
                  to date.
                </p>
              </div>

              {!editMode && (
                <button
                  type="button"
                  className="icon-edit-button"
                  onClick={handleEdit}
                  aria-label="Edit personal information"
                >
                  <Pencil size={17} />
                </button>
              )}
            </div>

            <form
              className="profile-form"
              onSubmit={handleSaveProfile}
            >
              <div className="profile-form-grid">
                <div className="profile-field">
                  <label htmlFor="name">Full name</label>
                  <div className="profile-input-wrapper">
                    <User size={17} />
                    <input
                      id="name"
                      name="name"
                      value={draftProfile.name}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="email">Email address</label>
                  <div className="profile-input-wrapper">
                    <Mail size={17} />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={draftProfile.email}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="role">Professional role</label>
                  <div className="profile-input-wrapper">
                    <BriefcaseIcon />
                    <input
                      id="role"
                      name="role"
                      value={draftProfile.role}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="location">Location</label>
                  <div className="profile-input-wrapper">
                    <MapPin size={17} />
                    <input
                      id="location"
                      name="location"
                      value={draftProfile.location}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="profile-field profile-field-full">
                  <label htmlFor="bio">About you</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={draftProfile.bio}
                    onChange={handleDraftChange}
                    disabled={!editMode}
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="website">Website</label>
                  <div className="profile-input-wrapper">
                    <Globe2 size={17} />
                    <input
                      id="website"
                      name="website"
                      placeholder="https://yourwebsite.com"
                      value={draftProfile.website}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="github">GitHub</label>
                  <div className="profile-input-wrapper">
                    <Globe2 size={17} />
                    <input
                      id="github"
                      name="github"
                      placeholder="github.com/username"
                      value={draftProfile.github}
                      onChange={handleDraftChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>
              </div>

              {editMode && (
                <div className="profile-form-footer">
                  <span>
                    <LockKeyhole size={14} />
                    Your information is stored securely.
                  </span>

                  <button
                    type="submit"
                    className="profile-save-inline"
                  >
                    <Save size={16} />
                    Save information
                  </button>
                </div>
              )}
            </form>
          </section>

          {/* Learning Intelligence */}
          <section
            id="profile-learning"
            className="profile-card"
          >
            <div className="profile-card-heading">
              <div>
                <span className="profile-section-label">
                  LEARNING INTELLIGENCE
                </span>
                <h2>Your learning profile</h2>
                <p>
                  These preferences help FailSense personalize
                  your recommendations.
                </p>
              </div>

              <div className="profile-ai-badge">
                <Brain size={15} />
                AI Personalized
              </div>
            </div>

            <div className="profile-learning-grid">
              <div className="profile-preference-card">
                <div className="preference-icon">
                  <Target size={19} />
                </div>

                <div className="preference-content">
                  <span>Primary learning goal</span>

                  <select
                    value={profile.learningGoal}
                    onChange={event => {
                      const updated = {
                        ...profile,
                        learningGoal: event.target.value,
                      }

                      setProfile(updated)
                      localStorage.setItem(
                        'failsense_profile',
                        JSON.stringify(updated),
                      )
                    }}
                  >
                    <option>
                      Become a stronger problem solver
                    </option>
                    <option>
                      Prepare for technical interviews
                    </option>
                    <option>
                      Improve coding fundamentals
                    </option>
                    <option>
                      Master algorithms and DSA
                    </option>
                  </select>
                </div>
              </div>

              <div className="profile-preference-card">
                <div className="preference-icon">
                  <Clock3 size={19} />
                </div>

                <div className="preference-content">
                  <span>Daily practice goal</span>

                  <select
                    value={profile.dailyGoal}
                    onChange={event => {
                      const updated = {
                        ...profile,
                        dailyGoal: event.target.value,
                      }

                      setProfile(updated)
                      localStorage.setItem(
                        'failsense_profile',
                        JSON.stringify(updated),
                      )
                    }}
                  >
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
              </div>

              <div className="profile-preference-card">
                <div className="preference-icon">
                  <Zap size={19} />
                </div>

                <div className="preference-content">
                  <span>Preferred difficulty</span>

                  <select
                    value={profile.difficulty}
                    onChange={event => {
                      const updated = {
                        ...profile,
                        difficulty: event.target.value,
                      }

                      setProfile(updated)
                      localStorage.setItem(
                        'failsense_profile',
                        JSON.stringify(updated),
                      )
                    }}
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Mixed</option>
                  </select>
                </div>
              </div>

              <div className="profile-preference-card">
                <div className="preference-icon">
                  <BookOpen size={19} />
                </div>

                <div className="preference-content">
                  <span>Primary coding language</span>

                  <select
                    value={profile.language}
                    onChange={event => {
                      const updated = {
                        ...profile,
                        language: event.target.value,
                      }

                      setProfile(updated)
                      localStorage.setItem(
                        'failsense_profile',
                        JSON.stringify(updated),
                      )
                    }}
                  >
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="profile-notification-settings">
              <div className="notification-heading">
                <div>
                  <h3>Notification preferences</h3>
                  <p>
                    Choose how FailSense keeps you updated.
                  </p>
                </div>

                <Bell size={19} />
              </div>

              <PreferenceToggle
                title="AI learning insights"
                description="Receive important insights about your recurring mistakes."
                checked={preferences.aiInsights}
                onChange={() =>
                  handlePreferenceChange('aiInsights')
                }
              />

              <PreferenceToggle
                title="Daily practice reminders"
                description="Get reminded when you haven't reached your daily goal."
                checked={preferences.emailNotifications}
                onChange={() =>
                  handlePreferenceChange('emailNotifications')
                }
              />

              <PreferenceToggle
                title="Weekly progress report"
                description="Receive a summary of your learning progress every week."
                checked={preferences.weeklyReport}
                onChange={() =>
                  handlePreferenceChange('weeklyReport')
                }
              />

              <PreferenceToggle
                title="New recommendation alerts"
                description="Know when FailSense discovers a new learning opportunity."
                checked={preferences.recommendationAlerts}
                onChange={() =>
                  handlePreferenceChange(
                    'recommendationAlerts',
                  )
                }
              />
            </div>
          </section>

          {/* Stats */}
          <section className="profile-stats-grid">
            <ProfileStat
              icon={Target}
              label="Problems solved"
              value="86" 
              change="+14 this month"
            />

            <ProfileStat
              icon={Activity}
              label="Accuracy"
              value="78.4%"
              change="+8.2% improvement"
            />

            <ProfileStat
              icon={Brain}
              label="Failures analyzed"
              value="42"
              change="12 patterns found"
            />

            <ProfileStat
              icon={Flame}
              label="Learning streak"
              value="12 days"
              change="Personal best"
            />
          </section>

          {/* Achievements */}
          <section
            id="profile-achievements"
            className="profile-card"
          >
            <div className="profile-card-heading">
              <div>
                <span className="profile-section-label">
                  ACHIEVEMENTS
                </span>
                <h2>Milestones you've earned</h2>
                <p>
                  Every improvement is worth recognizing.
                </p>
              </div>

              <div className="achievement-count">
                <Trophy size={16} />
                4 / 6 unlocked
              </div>
            </div>

            <div className="achievement-grid">
              {achievements.map(achievement => {
                const Icon = achievement.icon

                return (
                  <div
                    key={achievement.id}
                    className={
                      achievement.unlocked
                        ? 'achievement-card unlocked'
                        : 'achievement-card locked'
                    }
                  >
                    <div className="achievement-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
                    </div>

                    {achievement.unlocked ? (
                      <span className="achievement-check">
                        <Check size={13} />
                      </span>
                    ) : (
                      <span className="achievement-lock">
                        <LockKeyhole size={13} />
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Recent Activity */}
          <section
            id="profile-activity"
            className="profile-card"
          >
            <div className="profile-card-heading">
              <div>
                <span className="profile-section-label">
                  ACTIVITY
                </span>
                <h2>Recent activity</h2>
                <p>
                  A snapshot of your latest learning actions.
                </p>
              </div>

              <button
                type="button"
                className="view-all-button"
              >
                View all
                <ArrowIcon />
              </button>
            </div>

            <div className="activity-list">
              {recentActivity.map(item => (
                <div className="activity-item" key={item.id}>
                  <div
                    className={`activity-icon ${item.type}`}
                  >
                    {item.type === 'success' && (
                      <Check size={17} />
                    )}

                    {item.type === 'failure' && (
                      <Brain size={17} />
                    )}

                    {item.type === 'ai' && (
                      <Zap size={17} />
                    )}
                  </div>

                  <div className="activity-main">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>

                  <time>{item.time}</time>

                  <ChevronRight
                    className="activity-arrow"
                    size={16}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Security */}
          <section
            id="profile-security"
            className="profile-card security-card"
          >
            <div className="profile-card-heading">
              <div>
                <span className="profile-section-label">
                  SECURITY
                </span>
                <h2>Protect your account</h2>
                <p>
                  Manage your password and account security.
                </p>
              </div>

              <div className="security-status">
                <ShieldCheck size={16} />
                Secure
              </div>
            </div>

            <div className="security-row">
              <div className="security-row-icon">
                <KeyRound size={19} />
              </div>

              <div className="security-row-content">
                <strong>Password</strong>
                <span>
                  Your password was last updated recently.
                </span>
              </div>

              <button
                type="button"
                className="security-action"
                onClick={() =>
                  setShowPasswordForm(previous => !previous)
                }
              >
                {showPasswordForm
                  ? 'Cancel'
                  : 'Change password'}
              </button>
            </div>

            {showPasswordForm && (
              <form
                className="password-form"
                onSubmit={handlePasswordSubmit}
              >
                <div className="profile-field">
                  <label htmlFor="current">
                    Current password
                  </label>

                  <div className="profile-input-wrapper">
                    <LockKeyhole size={17} />
                    <input
                      id="current"
                      name="current"
                      type="password"
                      value={passwords.current}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="newPassword">
                    New password
                  </label>

                  <div className="profile-input-wrapper">
                    <LockKeyhole size={17} />
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      value={passwords.newPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label htmlFor="confirm">
                    Confirm new password
                  </label>

                  <div className="profile-input-wrapper">
                    <LockKeyhole size={17} />
                    <input
                      id="confirm"
                      name="confirm"
                      type="password"
                      value={passwords.confirm}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="update-password-button"
                >
                  <ShieldCheck size={16} />
                  Update password
                </button>
              </form>
            )}

            <div className="security-row">
              <div className="security-row-icon green">
                <ShieldCheck size={19} />
              </div>

              <div className="security-row-content">
                <strong>Account protection</strong>
                <span>
                  Your account is protected with secure
                  authentication.
                </span>
              </div>

              <span className="protected-label">
                Protected
              </span>
            </div>

            <div className="security-row danger">
              <div className="security-row-icon red">
                <LogOut size={19} />
              </div>

              <div className="security-row-content">
                <strong>Sign out of this account</strong>
                <span>
                  You'll need to authenticate again to access
                  your dashboard.
                </span>
              </div>

              <button
                type="button"
                className="danger-action"
                onClick={logout}
              >
                Sign out
              </button>
            </div>
          </section>

          {/* Account footer */}
          <section className="profile-account-footer">
            <div>
              <Settings2 size={18} />
              <div>
                <strong>FailSense account</strong>
                <span>
                  Your learning intelligence follows your
                  progress, not just your score.
                </span>
              </div>
            </div>

            <span className="account-id">
              ID: FS-{profile.email?.slice(0, 4).toUpperCase()}
            </span>
          </section>
        </main>
      </div>
    </div>
  )
}

const ProfileStat = ({icon: Icon, label, value, change}) => (
  <div className="profile-stat-card">
    <div className="profile-stat-icon">
      <Icon size={19} />
    </div>

    <span>{label}</span>

    <strong>{value}</strong>

    <small>{change}</small>
  </div>
)

const PreferenceToggle = ({
  title,
  description,
  checked,
  onChange,
}) => (
  <div className="preference-toggle-row">
    <div>
      <strong>{title}</strong>
      <span>{description}</span>
    </div>

    <button
      type="button"
      className={
        checked
          ? 'toggle-button checked'
          : 'toggle-button'
      }
      onClick={onChange}
      aria-label={`Toggle ${title}`}
      aria-pressed={checked}
    >
      <span />
    </button>
  </div>
)

const BriefcaseIcon = () => (
  <span className="custom-briefcase-icon">▣</span>
)

const ArrowIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export default Profile