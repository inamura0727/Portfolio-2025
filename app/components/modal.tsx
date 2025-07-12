'use client'

import { Button, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import '../../i18n'
import { ModalProps, ProjectWithParseData } from '../types/project'
import { ProjectDetailEn } from './projectDetail_en'
import { useLangStore } from '../utils/zustand/initial'
import { ProjectDetailJa } from './projectDetail_ja'

export const ProjectModal = ({ project }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const language = useLangStore((state) => state.language)
  const detailData = { project, setIsOpen }

  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ padding: 0.8 }}
        onClick={() => setIsOpen(true)}
      >
        See More
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {language === 'en' ? (
          <ProjectDetailEn {...detailData} />
        ) : (
          <ProjectDetailJa {...detailData} />
        )}
      </Modal>
    </>
  )
}
