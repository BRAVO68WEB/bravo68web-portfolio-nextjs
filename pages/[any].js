import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const { any } = router.query
    
    // redirect to s.b68.dev/any
    if (any) {
        // window.location.href = `https://s.b68.dev/${any}`
        router.push(`https://s.b68.dev/${any}`)
    }
}