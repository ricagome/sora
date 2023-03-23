import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut as signOutFromFb,
} from 'firebase/auth'
import { SetStateAction } from 'react'
import { auth } from '../libs/firebase'
import { Auth, SignInDto, SignUpDto, SignUpDtoFromForm } from '../types'
import { createUser } from './users'

const provider = new GoogleAuthProvider()

export const signWithGoogle = async () => {
	const result = await signInWithPopup(auth, provider)
	return result.user
}

export const signUp = async (signUpDto: SignUpDtoFromForm) => {
	const { email, password, name, surname } = signUpDto
	const { user } = await createUserWithEmailAndPassword(auth, email, password)
	const newUser = {
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		email,
		name,
		surname,
	}
	await createUser(user.uid, newUser)
	return user
}

export const signIn = async (signInDto: SignInDto) => {
	const { email, password } = signInDto
	const { user } = await signInWithEmailAndPassword(auth, email, password)
	return user
}

export const signOut = async () => {
	await signOutFromFb(auth)
}

export const sessionObserver = (
	setAuth: React.Dispatch<React.SetStateAction<Auth | null>>,
	setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
	return onAuthStateChanged(auth, (user: SetStateAction<Auth | null>) => {
		console.log('Refresh session in realtime 👤')
		if (user) {
			console.log('User exists')
			setAuth(user)
		} else {
			console.log('User not exists')
			setAuth(null)
		}
		if (setLoading) setLoading(false)
	})
}
