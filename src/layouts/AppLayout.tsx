import { Outlet, Link } from 'react-router-dom'
import homeIcon from '../images/hut.png'
import statsIcon from '../images/graph.png'
import projectIcon from '../images/folder.png'
import webgl from '../images/cube.png'
import three from '../images/three.png'
import scroll from '../images/scroll-bar.png'
import faceDetect from '../images/face-scanner.png'
import swipe from '../images/swipe.png'

import { useState } from 'react'

const AppLayout = (): JSX.Element => {
  const [menuSelect, setMenuSelect] = useState(1)
  const menu = [
    {
      title: 'Overview',
      icon: homeIcon,
      path: '/',
    },
    {
      title: 'Stats',
      icon: statsIcon,
      path: '/stats',
    },
    {
      title: 'Parallax',
      icon: projectIcon,
      path: '/parallax',
    },
    {
      title: 'WebGl',
      icon: webgl,
      path: '/webgl',
    },
    {
      title: 'Three',
      icon: three,
      path: '/three',
    },
    {
      title: 'Scroll smooth',
      icon: scroll,
      path: '/scroll',
    },
    {
      title: 'Face Detection',
      icon: faceDetect,
      path: '/faceDetect',
    },
    {
      title: 'Swipe',
      icon: swipe,
      path: '/swipe',
    },
  ]
  return (
    <section style={{ height: '100vh', display: 'flex' }}>
      <div
        style={{
          height: '100vh',
          width: 300,
          borderRight: '1px solid #f0f0f0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '40px 0px 20px 40px',
            fontWeight: 600,
            fontSize: 24,
          }}
        >
          .studio
        </div>
        <ul style={{ listStyleType: 'none' }}>
          {menu.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setMenuSelect(index + 1)}
                className={menuSelect === index + 1 ? 'menu active' : 'menu'}
                style={{ margin: '25px 0px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    padding: 3,
                  }}
                >
                  <img
                    src={item.icon}
                    style={{ width: 20, height: 20, marginRight: 20 }}
                  />
                  <Link
                    to={item.path}
                    className={
                      menuSelect === index + 1 ? 'link active' : 'link'
                    }
                  >
                    {item.title}
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <section style={{ display: 'flex', width: 'calc(100% - 300px)' }}>
        <Outlet />
      </section>
    </section>
    // <Layout style={{ minHeight: '100vh' }}>
    //   <Sider
    //     theme="light"
    //     width={256}
    //     style={{ justifyContent: 'space-between' }}
    //   >
    //     <div>asdas</div>
    //   </Sider>
    //   <Layout style={{ height: 'calc(100vh)' }}>
    //     <Content style={{ backgroundColor: 'blue' }}>
    //       <Header
    //         style={{
    //           padding: 0,
    //           background: 'red',
    //         }}
    //       ></Header>
    //       <Outlet />
    //     </Content>
    //   </Layout>
    // </Layout>
  )
}

export default AppLayout
