import { describe, expect, test, vi } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import { shallowMount } from '@vue/test-utils'

describe('Pruebas en el Home View', () => {
    test('debe renderizar el componente correctamente ', () => {
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Hacer click en un boton debe redireccionar a no-entry', () => {

        const mockRouter = {
            push: vi.fn()
        }

        const wrapper = shallowMount(HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenCalled()
    })

})