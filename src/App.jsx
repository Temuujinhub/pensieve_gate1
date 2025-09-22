import { useState } from 'react'
import companyLogo from '../public/assets/company-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', background:'#f9fafb'}}>
        <img src={companyLogo} alt="Company Logo" style={{width:'120px', marginBottom:'24px'}} />
        <h1 style={{fontSize:'2.5rem', fontWeight:'bold', marginBottom:'16px'}}>Pensieve Gate</h1>
        <p style={{fontSize:'1.2rem', color:'#555', maxWidth:'600px', marginBottom:'40px', textAlign:'center'}}>
          Бид таны бизнесийн дижитал шийдлийг бүтээж, инновацийг нээж, ирээдүйн технологийн хаалгыг нээдэг.
        </p>
        <div style={{width:'100%', maxWidth:'900px'}}>
          <section style={{marginBottom:'60px'}}>
            <h2 style={{fontSize:'2rem', fontWeight:'bold', marginBottom:'12px'}}>Бидний тухай</h2>
            <p style={{fontSize:'1rem', color:'#444'}}>Pensieve Gate бол дижитал шийдэл, вэб хөгжүүлэлт, технологийн зөвлөх үйлчилгээ үзүүлэгч компани юм. Бид бизнесүүдэд инноваци, үр ашиг, өсөлтийг авчирдаг.</p>
          </section>
          <section style={{marginBottom:'60px'}}>
            <h2 style={{fontSize:'2rem', fontWeight:'bold', marginBottom:'12px'}}>Үйлчилгээ</h2>
            <ul style={{fontSize:'1rem', color:'#444', paddingLeft:'20px'}}>
              <li>Вэб сайт хөгжүүлэлт</li>
              <li>Дижитал маркетинг</li>
              <li>Технологийн зөвлөх үйлчилгээ</li>
              <li>Брэнд дизайн, UI/UX</li>
            </ul>
          </section>
          <section style={{marginBottom:'60px'}}>
            <h2 style={{fontSize:'2rem', fontWeight:'bold', marginBottom:'12px'}}>Холбоо барих</h2>
            <p style={{fontSize:'1rem', color:'#444'}}>И-мэйл: info@pensievegate.mn<br/>Утас: +976-99112233</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
