import PageComponent from './PageComponent';
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';

type PageType = typeof PageComponent & {
    Header: typeof HeaderComponent,
    Content: typeof ContentComponent,
    Footer: typeof FooterComponent
}

const foo = PageComponent as PageType;

foo.Header = HeaderComponent;
foo.Content = ContentComponent;
foo.Footer = FooterComponent;

export default foo;
export {
  HeaderComponent,
  ContentComponent,
  FooterComponent
};
