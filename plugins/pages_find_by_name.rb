## from https://github.com/ruhoh/ruhoh.rb/issues/204#issuecomment-23202323

module PagesFindByName
  def find_by_name
    @find_by_name ||= FindByNameProxy.new(self)
  end

  class FindByNameProxy < SimpleDelegator
    def method_missing(name, *args, &block)
      model = __getobj__.find(name.to_s)
      model ? model : super
    end

    def respond_to?(method)
      __getobj__.find(method.to_s) ? true : super
    end
  end
end

Ruhoh::Resources::Pages::CollectionView.send(:include, PagesFindByName)

=begin

USE THIS WAY:

# my-blog/_root/index.html

{{# pages.find_by_name.about-me }}

  <h4>{{ title }}</h4>

  {{{ summary }}}

{{/ pages.find_by_name.about-me }}

This assumes you have a valid file at my-blog/pages/about-me.md

=end