import classNames from 'classnames'

const CSS_BASE_CLASS = {
  self: 'footer',
  wrapper: 'footer-wrapper',
  topWrapper: 'footer-topWrapper',
  bottomWrapper: 'footer-bottomWrapper',
  logo: 'footer-logo',
  logoWrapper: 'footer-logoWrapper',
  linkList: 'footer-linkList',
  linkItem: 'footer-linkItem',
  subSection: 'footer-subSection',
  subSectionLogo: 'footer-subSection--logo',
  typographyFooterLink: 'typography-footer-link',
  typographyFooterCopyright: 'typography-footer-copyright',
}

export default function Footer() {
  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.logoWrapper}>
          <span className={CSS_BASE_CLASS.logo} />
        </div>
        <div className={CSS_BASE_CLASS.topWrapper}>
          <div className={CSS_BASE_CLASS.subSection}>
            <ul
              className={classNames(
                CSS_BASE_CLASS.linkList,
                CSS_BASE_CLASS.typographyFooterLink
              )}
            >
              <li className={classNames(CSS_BASE_CLASS.linkItem)}>
                <a>Visi dan Misi</a>
              </li>
              <li className={classNames(CSS_BASE_CLASS.linkItem)}>
                <a>Bergabung Bersama Kami</a>
              </li>
              <li className={classNames(CSS_BASE_CLASS.linkItem)}>
                <a>Tentang Founder</a>
              </li>
            </ul>
          </div>
          <div className={CSS_BASE_CLASS.subSection}>
            <div>alamat</div>
          </div>
          <div className={CSS_BASE_CLASS.subSection}>
            <div>kontak kami</div>
            <br />
            <div>kontak kami</div>
            <br />
            <div>kontak kami</div>
            <br />
            <div>kontak kami</div>
            <br />
            <div>kontak kami</div>
          </div>
        </div>
        <div
          className={classNames(
            CSS_BASE_CLASS.bottomWrapper,
            CSS_BASE_CLASS.typographyFooterCopyright
          )}
        >
          Yayasan Flores Penuh kasih - 2025
        </div>
      </div>
    </div>
  )
}
