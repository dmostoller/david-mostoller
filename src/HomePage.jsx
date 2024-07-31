  import React, {createRef } from 'react'
  import {
    MenuMenu,
    MenuItem,
    Image,
    Input,
    Menu,
    Segment,
    Sticky,
  } from 'semantic-ui-react'
  import _ from 'lodash'

  const contextRef = createRef()

  function HomePage() {
  

    return (
        <>
        <div style={{marginTop: "500px"}} ref={contextRef}>
            Hello
        <Sticky context={contextRef}>
          <Menu
            attached='top'
            pointing
            secondary
            fluid
            style={{ backgroundColor: '#fff', paddingTop: '1em' }}
          >
            <MenuItem as='a' active name='bio' />
            <MenuItem as='a' active={false} name='photos' />
            <MenuMenu position='right'>
              <MenuItem>
                <Input
                  transparent
                  icon={{ name: 'search', link: true }}
                  placeholder='Search users...'
                />
              </MenuItem>
            </MenuMenu>
          </Menu>
        </Sticky>
        <Segment attached='bottom'>
          {_.times(5, (i) => (
            <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          ))}
        </Segment>
      </div>
        </>
    )

  }

  export default HomePage