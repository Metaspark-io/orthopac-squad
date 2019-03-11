import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import Vimeo from 'react-vimeo'

import './VideoModal.scss'

export default class VideoModal extends React.Component {
  state = {
    isOpen: false
  }

  openModal () {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  keydownHandler (e) {
    if (e.keyCode === 27) {
      this.closeModal()
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.keydownHandler.bind(this), false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keydownHandler)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ isOpen: nextProps.isOpen })
  }

  componentDidUpdate () {
    if (this.state.isOpen && this.modal) {
      this.modal.focus()
    }
  }

  updateFocus = e => {
    if (e.keyCode === 9) {
      e.preventDefault()
      e.stopPropagation()
      if (this.modal === document.activeElement) {
        this.modalbtn.focus()
      } else {
        this.modal.focus()
      }
    }
  }

  getPadding (ratio) {
    const arr = ratio.split(':')
    const width = Number(arr[0])
    const height = Number(arr[1])
    const padding = height * 100 / width
    return padding + '%'
  }

  render () {
    const style = {
      paddingBottom: this.getPadding(this.props.ratio)
    }

    return (
      <CSSTransition
        classNames={this.props.classNames.modalVideoEffect}
        timeout={this.props.animationSpeed}
      >
        {() => {
          if (!this.state.isOpen) {
            return null
          }

          return (
            <div className={this.props.classNames.modalVideo} tabIndex='-1' role='dialog'
              aria-label={this.props.aria.openMessage} onClick={this.closeModal} ref={node => { this.modal = node }} onKeyDown={this.updateFocus}>
              <div className={this.props.classNames.modalVideoBody}>
                <div className={this.props.classNames.modalVideoInner}>
                  <div className={this.props.classNames.modalVideoIframeWrap} style={style}>
                    <button className={this.props.classNames.modalVideoCloseBtn} aria-label={this.props.aria.dismissBtnMessage} ref={node => { this.modalbtn = node }} onKeyDown={this.updateFocus} />
                    <Vimeo videoId={this.props.videoId} onEnded={this.props.onEnded} {...this.props.vimeo}/>
                  </div>
                </div>
              </div>
            </div>)
        }}
      </CSSTransition>
    )
  }
}

VideoModal.defaultProps = {
  channel: 'vimeo',
  isOpen: false,
  ratio: '16:9',
  vimeo: {
    api: true,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideoEffect: 'video-modal-effect',
    modalVideo: 'video-modal',
    modalVideoClose: 'video-modal-close',
    modalVideoBody: 'video-modal-body',
    modalVideoInner: 'video-modal-inner',
    modalVideoIframeWrap: 'video-modal-movie-wrap',
    modalVideoCloseBtn: 'video-modal-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
}
