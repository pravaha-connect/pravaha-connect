// Authentication Service
import {
    auth,
    googleProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from './firebase-config.js';

class AuthService {
    constructor() {
        this.currentUser = null;
        this.initAuthListener();
    }

    // Initialize auth state listener
    initAuthListener() {
        onAuthStateChanged(auth, (user) => {
            this.currentUser = user;
            this.handleAuthStateChange(user);
        });
    }

    // Handle authentication state changes
    handleAuthStateChange(user) {
        if (user) {
            console.log('User signed in:', user.email);
            // Redirect to dashboard or home page
            if (window.location.pathname.includes('login.html')) {
                window.location.href = 'dashboard.html';
            }
        } else {
            console.log('User signed out');
            // Redirect to login if on protected pages
            if (!window.location.pathname.includes('login.html') &&
                !window.location.pathname.includes('index.html')) {
                window.location.href = 'login.html';
            }
        }
    }

    // Sign in with email and password
    async signInWithEmail(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return {
                success: true,
                user: userCredential.user,
                message: 'Login successful!'
            };
        } catch (error) {
            return {
                success: false,
                error: error.code,
                message: this.getErrorMessage(error.code)
            };
        }
    }

    // Sign in with Google
    async signInWithGoogle() {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            return {
                success: true,
                user: result.user,
                message: 'Google sign-in successful!'
            };
        } catch (error) {
            console.error('Google sign-in error details:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            return {
                success: false,
                error: error.code,
                message: this.getErrorMessage(error.code)
            };
        }
    }

    // Create new account
    async createAccount(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return {
                success: true,
                user: userCredential.user,
                message: 'Account created successfully!'
            };
        } catch (error) {
            return {
                success: false,
                error: error.code,
                message: this.getErrorMessage(error.code)
            };
        }
    }

    // Sign out
    async signOut() {
        try {
            await signOut(auth);
            return {
                success: true,
                message: 'Signed out successfully!'
            };
        } catch (error) {
            return {
                success: false,
                error: error.code,
                message: 'Error signing out'
            };
        }
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is authenticated
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Get user-friendly error messages
    getErrorMessage(errorCode) {
        const errorMessages = {
            'auth/user-not-found': 'No account found with this email address.',
            'auth/wrong-password': 'Incorrect password. Please try again.',
            'auth/email-already-in-use': 'An account with this email already exists.',
            'auth/weak-password': 'Password should be at least 6 characters long.',
            'auth/invalid-email': 'Please enter a valid email address.',
            'auth/user-disabled': 'This account has been disabled.',
            'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
            'auth/network-request-failed': 'Network error. Please check your connection.',
            'auth/popup-closed-by-user': 'Sign-in popup was closed before completion.',
            'auth/cancelled-popup-request': 'Sign-in was cancelled.',
            'auth/popup-blocked': 'Sign-in popup was blocked by the browser.',
            'auth/unauthorized-domain': 'This domain is not authorized for OAuth operations. Please add it to the Firebase console.',
            'auth/operation-not-allowed': 'Google sign-in is not enabled. Please enable it in the Firebase console.',
            'auth/invalid-api-key': 'Invalid API key. Please check your Firebase configuration.',
            'auth/app-not-authorized': 'This app is not authorized to use Firebase Authentication.',
            'auth/invalid-user-token': 'The user\'s credential is no longer valid. Please sign in again.',
            'auth/user-token-expired': 'The user\'s credential has expired. Please sign in again.',
            'auth/null-user': 'The user is null. Please try signing in again.',
            'auth/invalid-credential': 'The authentication credential is malformed or has expired.'
        };

        return errorMessages[errorCode] || `Authentication error (${errorCode}). Please try again or contact support.`;
    }

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate password strength
    validatePassword(password) {
        return {
            isValid: password.length >= 6,
            message: password.length < 6 ? 'Password must be at least 6 characters long' : ''
        };
    }
}

// Create and export auth service instance
const authService = new AuthService();
export default authService;