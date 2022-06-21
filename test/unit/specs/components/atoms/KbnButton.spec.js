// import mount function
import { mount } from '@vue/test-utils'
import { KbnButton } from '@/components/atoms/KbnButton.vue'

// describe()関数は、複数のテストケースをフォルダのような階層関係でまとめるための機能で、文字列の部分はフォルダの名前のような感覚で使います。
describe(('KbnButton', () => {
  describe('type', () => {
    describe('デフォルト', () => {
      // it()のコールバック関数の内側が1つのテストであることを意味しています。
      it('kbn-buttonクラス持つbutton要素で構成されること'), () => {
        const button = mount(KbnButton)
        // KbnButtonは<button>か
        expect(button.is('button')).to.equal(true)
        // KbnButtonのクラス名にkbn-buttonが含まれているか
        expect(button.classes()).to.include('kbn-button')
      }
    })

    describe('button', () => {
      it('kbn-buttonクラスを持つbutton要素で構成されること', ()=> {
        const button = mount(KbnButton, {
          // 実装コードVueインスタンスのProps>typeによってクラスが変更されるため、このテストでもtypeをbuttonにしてテストする
          propsData : { type: 'button' }
        })
      })
      // KbnButtonは<button>か
      expect(button.is('button')).to.be(true)
      expect(button.classes()).to.include('kbn-button')
    })

    describe('button', () => {
      it('kbn-button-textクラスを持つbutton要素で構成されること', ()=> {
        const button = mount(KbnButton, {
          propsData : { type: 'button' }
        })
      })
      // KbnButtonは<button>か
      expect(button.is('button')).to.be(true)
      expect(button.classes()).to.include('kbn-button-text')
    })
  })
  
  describe('disabled', () => {
    describe('デフォルト', () => {
      it('disabled属性が付与されていないこと', () => {
        const button = mount(KbnButton)
        expect(button.attributes().disabled).to.be.an('undefined')
      })
    })
    
    describe('true', () => {
      it('disabled属性が付与されている', () => {
        const button = mount(KbnButton, {
          propsData: { disabled: true }
        })
        expect(button.attributes().disabled).to.equal(true)
      })
    })

    describe('false', () => {
      it('disabled属性が付与されていない', () => {
        const button = mount(KbnButton, {
          propsData: { disabled: false }
        })
        expect(button.attributes().disabled).to.equal(false)
      })
    })
  })

  describe('イベント', () => {
    describe('click', () => {
      it('発行されていること', () => {
        const button = mount(KbnButton)
        // テスト上でbuttonをクリックする
        button.trigger('click')
        // Wrapper vm によって生成されたカスタムイベントを含むオブジェクトを返す
        expect(button.emitted().click.length).to.equal(1)
      })
    })
  })

  describe('slot', () => {
    describe('コンテンツ挿入あり', () => {
      it('挿入されていること', () => {
        const button = mount(KbnButton, {
          slots: { default: '<p>hello</p>'}
        })
        expect(button.text()).to.equal('hello')
      })
    })

    describe('コンテンツ挿入なし', () => {
      it('挿入されていないこと', () => {
        const button = mount(KbnButton)
        expect(button.text()).to.equal('')
      })
    })
  })
}))