import { Database } from '@/database.types'

// Database for Project
export type Project = Database['public']['Tables']['project']['Row']

export type PropjectPageProps = {
  params: {
    projectId: string
  }
}

// Parsed Data from DB
export type ProjectWithParseData = Project & {
  front: string[]
  server: string[]
  achievement: string[]
}

export type ModalProps = {
  project: ProjectWithParseData
}

export type ProjectDetailProps = {
  project: ProjectWithParseData
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
