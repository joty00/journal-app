import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import AboutView from '@/views/AboutView.vue'

describe('Pruebas en el About View', () => {

    test('debe renderizar el componente correctamente ', () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })




})