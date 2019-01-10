'use strict';

import Vue from 'vue';
import axios from 'axios';

let baseURL = '';

switch (process.env.NODE_ENV) {
	case 'development':
		baseURL = 'https://mock.lanternfish.ai/mock/5c2edff2bd74d900221cf831';
		break;
	case 'gh-pages':
		baseURL = 'https://mock.lanternfish.ai/mock/5c2edff2bd74d900221cf831';
		break;
	case 'test':
		/** 在此处添加测试环境接口总地址 */
		baseURL = '';
		break;
	case 'production':
		/** 在此处添加生产环境接口总地址 */
		baseURL = '';
		break;
	default:
		break;
}

let config = {
	baseURL,
};

const _axios = axios.create(config);

Plugin.install = function(Vue, options) {
	Vue.axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		axios: {
			get() {
				return _axios;
			},
		},
		$axios: {
			get() {
				return _axios;
			},
		},
	});
};

Vue.use(Plugin);

export default Plugin;
