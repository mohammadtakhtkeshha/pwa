import { Card } from '@mui/material'
import ListLink from 'components/list/ListLink'
import ListLinkProject from 'components/list/ListLinkProject'
import React from 'react'

type Props = {}

const Project = (props: Props) => {
  return (
    <Card sx={{ margin: ' 30px 0 ' ,padding :"15px 7px"} }>
      <ListLinkProject/>
    </Card>
  )
}

export default Project