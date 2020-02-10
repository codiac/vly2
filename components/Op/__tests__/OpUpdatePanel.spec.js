import React from 'react'
import test from 'ava'
import { OpDetailPage } from '../../../pages/op/opdetailpage'
import { OpTabs } from '../../../components/Op/OpTabs'
import { mountWithIntl } from '../../../lib/react-intl-test-helper'

test.serial('render op detail page - Updates tab', t => {
  const wrapper = mountWithIntl(<OpDetailPage />)

  wrapper.find('.ant-tabs-tab').at(2).simulate('click')
  t.is(wrapper.find('.ant-tabs-tab-active.ant-tabs-tab').first().text(), 'Updates')
})
