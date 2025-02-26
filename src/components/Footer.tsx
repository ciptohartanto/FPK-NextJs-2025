import classNames from 'classnames'

import { useFpkContext } from '@/context'
import { FooterQuery } from '@/gql/graphql'

type FooterProps = Pick<FooterQuery, 'theFooter'>

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
  typographyFooterTitle: 'typography-footer-title',
  typographyFooterContent: 'typography-footer-content',
  content: 'footer-content',
}

export default function Footer({ theFooter }: FooterProps) {
  const { footerSection, linksWithPopup, copyrightText } = theFooter!
  const { handlePopupContent } = useFpkContext()

  return (
    <div className={CSS_BASE_CLASS.self}>
      <div className={CSS_BASE_CLASS.wrapper}>
        <div className={CSS_BASE_CLASS.logoWrapper}>
          <a href="./" className={CSS_BASE_CLASS.logo} />
        </div>
        <div className={CSS_BASE_CLASS.topWrapper}>
          <div className={CSS_BASE_CLASS.subSection}>
            <ul
              className={classNames(
                CSS_BASE_CLASS.linkList,
                CSS_BASE_CLASS.typographyFooterLink
              )}
            >
              {linksWithPopup.map((link) => (
                <li
                  key={link.id}
                  className={classNames(CSS_BASE_CLASS.linkItem)}
                  onClick={() => {
                    handlePopupContent({
                      popupTitle: link.buttonText,
                      isWithButtons: link.isWithButtons,
                      contentBodyType: link.contentBodyType,
                      content: [
                        link.popupLeftContent.html,
                        link.popupRightContent.html,
                      ],
                    })
                  }}
                >
                  <span>{link.buttonText}</span>
                </li>
              ))}
            </ul>
          </div>
          {footerSection.map((item) => (
            <div key={item.id} className={CSS_BASE_CLASS.subSection}>
              <div className={CSS_BASE_CLASS.typographyFooterTitle}>
                {item.title}
              </div>
              <div
                className={classNames(
                  CSS_BASE_CLASS.content,
                  CSS_BASE_CLASS.typographyFooterContent
                )}
                dangerouslySetInnerHTML={{ __html: item.content.html }}
              />
            </div>
          ))}
        </div>
        <div
          className={classNames(
            CSS_BASE_CLASS.bottomWrapper,
            CSS_BASE_CLASS.typographyFooterCopyright
          )}
        >
          {copyrightText}
        </div>
      </div>
    </div>
  )
}
