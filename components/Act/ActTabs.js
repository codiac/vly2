import { Tabs } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const shadowStyle = { overflow: 'visible', textAlign: 'center', fontWeight: 'bold', color: '#6549AA' }
const { TabPane } = Tabs

const actAboutTab =
  <FormattedMessage
    id='opTabs.about'
    defaultMessage='About'
    description='Tab label on OpDetailsPage'
  />

  const actInstructionTab =
  <FormattedMessage
    id='opTabs.about'
    defaultMessage='About'
    description='Tab label on OpDetailsPage'
  />


  const actForumTab =
  <FormattedMessage
    id='opTabs.questions'
    defaultMessage='Questions'
    description='Tab label for Question panel on Opportunity'
  />


const actEditTab =
  <FormattedMessage
    id='opTabs.edit'
    defaultMessage='Edit'
    description='Tab label for Op Editor panel on Opportunity'
  />

  export const ActTabs = ({ act, onChange, canManage, defaultTab }) => (
    <>
      <VTabs style={shadowStyle} size='large' defaultActiveKey={defaultTab} onChange={onChange}>
        <TabPane tab={opAboutTab} key='about'>
          <ActAboutPanel op={op} />
        </TabPane>
  
        {isNotProd && (
          <TabPane tab={opForumTab} key='question'>
            <ActQuestionPanel op={op} />
          </TabPane>
        )}
        {isNotProd && (
          <TabPane tab={opUpdateTab} key='news'>
            <ActUpdatePanel op={op} />
          </TabPane>
        )}
        {canManage && (
          <TabPane tab={opManageTab} key='manage'>
            <ActManagePanel op={op} />
          </TabPane>
        )}
        {canManage && (
          <TabPane tab={opEditTab} key='edit' />
        )}
      </VTabs>
    </>
  )