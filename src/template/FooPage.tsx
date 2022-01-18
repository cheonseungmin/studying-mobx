import React from 'react';
import Foo, {
  HeaderComponent as FooHeaderComponent,
  ContentComponent as FooContentComponent,
  FooterComponent as FooFooterComponent
} from '../component/foo';


const FooPage: React.FC = () => (
  <Foo examplePageProp="Foo">
    <FooHeaderComponent/>
    <FooContentComponent/>
    <FooFooterComponent/>
  </Foo>
);

export default FooPage;
