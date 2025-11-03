'use client'

import { ExpandMoreRounded } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = ({ faq }: { faq: FAQItem[] }) => {
  const [expanded, setExpanded] = useState<number | false>(false)

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <div className="w-full md:w-2/3 flex flex-col gap-4">
      {faq.map((item, idx) => {
        return (
          <Accordion
            key={idx}
            slotProps={{transition: {timeout: 600}}}
            expanded={expanded === idx}
            onChange={handleChange(idx)}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 0 10px var(--color-accent-muted)',
              mb: 1.5,
              '&:before': { display: 'none' },
              overflow: 'hidden',
              color: 'var(--color-text-primary)',
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreRounded
                  style={{
                    color: 'var(--color-accent-primary)',
                    backgroundColor: 'var(--color-accent-highlight)',
                    borderRadius: '20%',
                    padding: 2,
                    width: 28,
                    height: 28,
                  }}
                />
              }
              sx={{
                padding: '1rem 1.5rem',
                '& .MuiTypography-root': {
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                },
              }}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: '1rem 1.5rem',
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default FAQ
