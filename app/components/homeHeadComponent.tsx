import Link from 'next/link'
import style from '../css/homeHead.module.css'
export const HomeHeadComponent = () => {
  return (
    <div className={style.content}>
      <div className={style.bgImg}>
        <div className={style.bgImg_rayer}>
          <div className={style.titleLy}>
            <h1 className={style.title}>Tamaki Inamrua</h1>
          </div>
          <div className={style.subTitleLy}>
            <p className={style.subTitle}>FULL STACK ENGINEER</p>
          </div>
          <div className={style.btnWrap}>
            <div className={style.btn}>
              <Link href="/profile">Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
