import React from "react";
import { Layout, Typography, List, Avatar } from "antd";
import "./override.css";

const { Content } = Layout;
const { Title } = Typography;

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}
interface Props {
  title: string;
  news: Article[];
}

const NewsContent: React.FC<Props> = (props) => {
  return (
    <Layout className="ant-layout">
      <Content>
        <Title className="ant-typography">{props.title}</Title>

        {props.news ? (
          <List
            className="ant-list-item-meta"
            itemLayout="horizontal"
            dataSource={props.news}
            renderItem={(article: Article) => (
              <List.Item className="ant-list-item-meta-title">
                <List.Item.Meta
                  avatar={<Avatar className="ant-list-item-meta-avatar" src={article.urlToImage} />}
                  title={
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  }
                  description={article.description}
                />
              </List.Item>
            )}
          />
        ) : (
          <div>Loading...</div>
        )}
      </Content>
    </Layout>
  );
};

export default NewsContent;
