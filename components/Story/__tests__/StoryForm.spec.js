import React from 'react'
import test from 'ava'
import { mountWithIntl, shallowWithIntl } from '../../../lib/react-intl-test-helper'
import StoryForm from '../../../components/Story/StoryForm'
import sinon from 'sinon'

const story = {
  _id: '5cc903e5f94141437622cea8',
  name: 'Story of the sun',
  description: 'This is an update about sun'
}

const orginalWarn = console.warn

test.before('before test silence async-validator', () => {
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].startsWith('async-validator:')) return
    orginalWarn(...args)
  }
})

test.after.always(() => {
  console.warn = orginalWarn
})

test('shallow the detail with story', t => {
  const wrapper = shallowWithIntl(
    <StoryForm
      story={story}
      onSubmit={() => {}}
    />
  )
  t.is(wrapper.find('StoryForm').length, 0)
})

test('render the detail with story', t => {
  const submitStory = sinon.spy()

  const me = { _id: '5ccbffff958ff4833ed2188e' }
  const wrapper = mountWithIntl(
    <StoryForm
      story={story}
      me={me}
      onSubmit={submitStory}
    />
  )
  t.is(wrapper.find('StoryForm').length, 1)
  t.is(wrapper.find('button').length, 1)
})
