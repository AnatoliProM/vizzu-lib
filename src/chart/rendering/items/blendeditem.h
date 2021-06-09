#ifndef BLENDEDITEM_H
#define BLENDEDITEM_H

#include "drawitem.h"

namespace Vizzu
{
namespace Draw
{

class BlendedDrawItem : public DrawItem
{
public:
	BlendedDrawItem(const Diag::Marker &item,
	    const Diag::DiagramOptions &options,
	    const Styles::Chart &style,
	    const Diag::Diagram::Markers &items,
	    size_t lineIndex);

	template <typename T, size_t N>
	void blend(std::array<DrawItem, N> &items, T DrawItem::*member);
};

}
}

#endif
