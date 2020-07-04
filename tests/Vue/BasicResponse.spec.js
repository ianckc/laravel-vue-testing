import { mount } from '@vue/test-utils';
import BasicResponse from '../../resources/js/components/BasicResponse';
import moxios from 'moxios';

describe ('BasicResponse', () => {

    let wrapper;

    beforeEach(() => {
        moxios.install();
        wrapper = mount(BasicResponse);
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it ('gets the basic response from the api endpoint', async () => {
        let returnedMessage = 'A moxios message';
        moxios.stubRequest('/api/basic-response', {
            status: 200,
            response: {
                message: returnedMessage,
            }
        });
        await wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.message).toBe(returnedMessage);
    });

});
