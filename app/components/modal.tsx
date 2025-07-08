'use client'

import { Button, Modal } from '@mui/material'
import { useState } from 'react'
import '../../i18n'
import { ModalProps } from '../types/project'
import { ProjectDetailEn } from './projectDetail_en'

export const ProjectModal = ({ project }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

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
        {/* TODO: Add a function to change the display language based on the user's preferred language. */}
        {/* <ProjectDetailJa detailData={detailData} /> */}
        <ProjectDetailEn {...detailData} />
      </Modal>
    </>
  )
}
