import { atom } from "nanostores";
const sections = ["landing", "skills", "work", "contact"] as const
interface AppStore {
    section: typeof sections[number]
}
const store = atom<AppStore>({
    section: "landing"
})
export type { AppStore }
export default store
export { sections }