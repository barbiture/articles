import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArticleList from './article-list';
import articles from '../../fixtures/articles';

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
	it('should mount article list', () => {
		const container = mount(<ArticleList articles={articles} />);
		expect(container.find('li').length).toEqual(articles.length)
	});
});